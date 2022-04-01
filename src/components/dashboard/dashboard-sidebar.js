import { useEffect, useMemo, useRef, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import { Logo } from '../logo';
import { Scrollbar } from '../scrollbar';
import { DashboardSidebarSection } from './dashboard-sidebar-section';
import { OrganizationPopover } from './organization-popover';

//Icons
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidIcon from '@mui/icons-material/Paid';
import SpeedIcon from '@mui/icons-material/Speed';
import PersonalIDIcon from '../../icons/PersonalIDcon';
import Store from '../../icons/Store';
import ManageIcon from '../../icons/ManageIcon';
import CreateInvoiceIcon from '../../icons/CreateInvoiceIcon';
import MyClientIcon from '../../icons/MyClientsIcon';

const getSections = (t) => [
  {
    title: t('YOUR BANK ACCOUNT'),
    items: [
      {
        title: t('Financial'),
        path: '/',
        icon: <AccountBalanceIcon  style={{fontSize: '2rem'}} />
      },
      {
        title: t('Bussines'),
        path: '/',
        icon: <PaidIcon style={{fontSize: '2rem'}} />
      },
      {
        title: t('Tax Vault'),
        path: '/',
        icon: <SpeedIcon style={{fontSize: '2rem'}}  />
      },
      {
        title: t('Personal Card'),
        path: '/',
        icon: <PersonalIDIcon style={{fontSize: '2rem'}} />
      }
    ]
  },
  {
    title: t('QUICK ACTIONS'),
    items: [
      {
        title: t('My Store'),
        path: '/',
        icon: <Store style={{fontSize: '2rem'}} />
      },
      {
        title: t('Manage Services'),
        path: '/',
        icon: <ManageIcon style={{fontSize: '2rem'}} />
      },
      {
        title: t('Create Invoice'),
        path: '/',
        icon: <CreateInvoiceIcon style={{fontSize: '2rem'}} />
      },
      {
        title: t('My Clients List'),
        path: '/',
        icon: <MyClientIcon style={{fontSize: '2rem'}} />
      }
    ]
  },
];

export const DashboardSidebar = (props) => {
  const { onClose, open } = props;
  const router = useRouter();
  const { t } = useTranslation();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    noSsr: true
  });
  const sections = useMemo(() => getSections(t), [t]);
  const organizationsRef = useRef(null);
  const [openOrganizationsPopover, setOpenOrganizationsPopover] = useState(false);

  const handlePathChange = () => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  };

  useEffect(handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady, router.asPath]);

  const handleOpenOrganizationsPopover = () => {
    setOpenOrganizationsPopover(true);
  };

  const handleCloseOrganizationsPopover = () => {
    setOpenOrganizationsPopover(false);
  };

  const content = (
    <>
      <Scrollbar sx={{height: '100%','& .simplebar-content': {height: '100%'}}}>
        <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
          <div>
            <Box sx={{ pt: 4, pl: 4}}>
              <NextLink
                href="/"
                passHref
              >
                <a>
                  <Logo
                    sx={{
                      height: 42,
                      width: 42
                    }}
                  />
                </a>
              </NextLink>
            </Box>
          </div>
          <Divider
            sx={{
              borderColor: '#2D3748',
              my: 3
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section) => (
              <DashboardSidebarSection
                key={section.title}
                path={router.asPath}
                sx={{
                  mt: 2,
                  '& + &': {
                    mt: 2
                  }
                }}
                {...section} />
            ))}
          </Box>
        </Box>
      </Scrollbar>
      <OrganizationPopover
        anchorEl={organizationsRef.current}
        onClose={handleCloseOrganizationsPopover}
        open={openOrganizationsPopover}
      />
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(16, 16, 16, 1)',
            borderRightColor: 'divider',
            borderRightStyle: 'solid',
            borderRightWidth: (theme) => theme.palette.mode === 'dark' ? 1 : 0,
            color: '#FFFFFF',
            width: 400
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
