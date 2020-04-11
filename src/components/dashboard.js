import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import ContinuousSlider from './slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Dashboard extends Component {
    state = {switch:false,volume:30,quality:20, notifications:[]}
     handleChange = (event) => {
        this.setState({switch:!this.state.switch });
        if(this.state.switch == false) {
            let newArray = this.state.notifications
            newArray.push("Your application is offline. You won't be able to share or stream music to other devices.")
            this.setState({notifications:newArray})
        }
    }
    handleSlider = (value) => {
        if(value !== this.state.volume){
            this.setState({volume:value})
            if(value>80){
                let newArray = this.state.notifications
                newArray.push("Listening to music at a high volume could cause long-term hearing loss..")
                this.setState({notifications:newArray})
            }
        }
        
    }
    handleSelect = (event) => {
        this.setState({quality:event.target.value})
        if(this.state.quality == 10) {
            let newArray = this.state.notifications
            newArray.push("Music quality is degraded. Increase quality if your connection allows it..")
            this.setState({notifications:newArray})
        }
        console.log(event.target.value)
    }
    render () {
        return(
            <div>
                <h1>Music App Dashboard</h1>
                <div><Card  variant="outlined">
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          online switch
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>
        <Switch
            onClick = {this.handleChange}
            color="primary"
          />
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    <Card  variant="outlined">
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          master volume
        </Typography>
        <Typography variant="h5" component="h2">
          <ContinuousSlider handleSlider = {this.handleSlider}></ContinuousSlider>
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    <Card  variant="outlined">
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          sound quality
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value = {this.state.quality}
          onChange = {this.handleSelect}
          
        >
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
        
          <br />
      
        
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
    </div>
    <div>
        <h1>system notifications</h1>
        {this.state.notifications.map(message =>(
            <p>{message}</p>
        ))}
    </div>
            </div>
        )
    }
}
export default Dashboard