import Spinner from './Spinner'
import useStyles from './styles'

const Loading = () => {
  const classes = useStyles()
  return (
    <div className={classes.loading}>
      <Spinner />
    </div>
  )
}

export default Loading