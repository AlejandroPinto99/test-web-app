import PropTypes from 'prop-types';
import { List, ListSubheader } from '@mui/material';
import { DashboardSidebarItem } from './dashboard-sidebar-item';


const renderNavItems = ({ depth = 0, items, path, selected, setSelected}) => (
  <List disablePadding>
    {items.reduce((acc, item) => reduceChildRoutes({ acc, depth, item, path, selected, setSelected }), [])}
  </List>
);

const reduceChildRoutes = ({ acc, depth, item, path, selected, setSelected }) => {
  const key = `${item.title}-${depth}`;
  const partialMatch = item.path ? path.includes(item.path) : false;
  const exactMatch = path.split('?')[0] === item.path; // We don't compare query params

  if (item.children) {
    acc.push(
      <DashboardSidebarItem
        active={partialMatch}
        chip={item.chip}
        depth={depth}
        icon={item.icon}
        info={item.info}
        key={key}
        selected={selected}
        setSelected={setSelected}
        open={partialMatch}
        path={item.path}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          items: item.children,
          path
        })}
      </DashboardSidebarItem>
    );
  } else {
    acc.push(
      <DashboardSidebarItem
        active={exactMatch}
        chip={item.chip}
        depth={depth}
        icon={item.icon}
        info={item.info}
        selected={selected}
        setSelected={setSelected}
        key={key}
        path={item.path}
        title={item.title}
      />
    );
  }

  return acc;
};

export const DashboardSidebarSection = (props) => {
  const { items, path, title, selected, setSelected, ...other} = props;

  return (
    <List
      subheader={(
        <ListSubheader
          disableGutters
          disableSticky
          sx={{
            color: '#A3A3A3',
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 2.5,
            ml: 4,
            textTransform: 'uppercase'
          }}
        >
          {title}
        </ListSubheader>
      )}
      {...other}>
      {renderNavItems({
        items,
        path,
        selected,
        setSelected
      })}


    </List>
  );
};

DashboardSidebarSection.propTypes = {
  items: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
