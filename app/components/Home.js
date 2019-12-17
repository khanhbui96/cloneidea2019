// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Link from 'react-router-dom/Link'

// const Home = (props)=>{
//     return(
//         <div>

            // <Link to='/login'><Button>Online</Button></Link>
            // <Link to='/offline'><Button>Offline</Button></Link>
            
            
        
//         </div>
//     )
// };

// export default Home;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from 'react-router-dom/Link'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
  card: {
    minWidth: 280,
    marginLeft: 20
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          Bộ công cụ quản lí vận tải - Hiệp đồng vận tải
          </Typography>
        </Toolbar>
      </AppBar>
      <div style = {{display: 'flex', marginTop: 200 }}>
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Quản lí cá nhân
        </Typography>
        <Typography variant="body2" component="p">
          Chức năng hiệp đồng vận tải sẽ không có ở mục này
        </Typography>
        <Typography variant="body2" component="p">
          Dữ liệu sẽ được lưu tại máy tính cá nhân
        </Typography>
        <Typography variant="body2" component="p">
          Hãy đảm bảo máy tính phải được cài đặt cơ sở dữ liệu Mongodb
        </Typography>
      </CardContent>
      <CardActions>
      <Link to='/offline'><Button>Bắt đầu</Button></Link>
      </CardActions>
    </Card>
    <Card className={classes.card}>
      <CardContent>
        
        <Typography variant="h5" component="h2">
          Quản lí tập trung 
        </Typography>
        <Typography variant="body2" component="p">
          Hỗ trợ quản lí hiệp đồng vận tải từ xa
        </Typography>
        <Typography variant="body2" component="p">
          Dữ liệu được lưu tập trung tại server trên mạng Lan hoặc Internet
        </Typography>
        <Typography variant="body2" component="p">
          Hãy đảm bảo máy tính được kết nối mạng Lan hoặc Internet
        </Typography>
      </CardContent>
      <CardActions>
      <Link to='/login'><Button>Bắt đầu</Button></Link>
      </CardActions>
    </Card>
    
    </div>
      
            
    </div>
  );
}