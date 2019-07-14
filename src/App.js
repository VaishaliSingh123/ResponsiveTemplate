import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import ScreenLockRotationIcon from '@material-ui/icons/ScreenLockRotation';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AssignmentReturnIcon from '@material-ui/icons/AssignmentReturn';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from "@material-ui/core/styles";
import AppStyle from  './AppStyle.js';

class App extends React.Component{
  render(){
    const { classes } = this.props;
  return (
    <div className={classes.mainDiv}>
        <div className={classes.leftDiv}>
          <Card>
            <div className={classes.leftHeaderHeight}>
              <div className={classes.leftHeaderLeft}>
                      Relax Plan
              </div>
              <div>
              <div className={classes.leftHeaderRight}>
              Rs2,999
            </div>
            <div className={classes.gstRight}>
            +18%GST
            </div>
              </div>
             
            </div>
           <div className={classes.childDiv}>
             <div className={classes.singleLineText}>Lots of tenant choices.Super-fast closure.Zero unwanted calls</div>
             <div  className={classes.tableDiv} >
             <table className={classes.tableStyle}>
                <tr className={classes.alerTrColor}>
                  <td className={classes.tdStyling}><AccountCircleIcon /></td>
                  <td className={classes.tdStyling}>Personal Assistent</td>
                </tr>
                <tr>
                  <td className={classes.tdStyling}><ScreenLockRotationIcon/></td>
                  <td className={classes.tdStyling}>Privacy of your phone number</td>
                </tr>
                <tr className={classes.alerTrColor}>
                  <td className={classes.tdStyling}><YoutubeSearchedForIcon/></td>
                  <td className={classes.tdStyling}>Property Promotion</td> 
                </tr>
                <tr>
                  <td className={classes.tdStyling}><AssignmentReturnIcon /></td>
                  <td className={classes.tdStyling}>Rental Aggreement-Home delivere</td>
                </tr>
                <tr className={classes.alerTrColor}>
                  <td className={classes.tdStyling}><VolumeUpIcon/></td>
                  <td className={classes.tdStyling}>Facebbok Marketing of property</td>  
                </tr>          
            </table>
             </div>
             <div className={classes.buttonStyle}>
             <Button variant="contained" color="secondary" className={classes.buttonSpec}>
                  BUY NOW
             </Button>
             </div>
           </div>
          </Card>
          </div >
        <div className={classes.rightDiv}>
          <Card className={classes.cardHeight}>
          <div className={classes.rightHeaderHeight}>
              <div>
                <div className={classes.righHeaderLeft}>
                        Super Relax Plan
                </div>
                <div className={classes.OnlyRighHeaderLeft}>*Bangalore only</div>
              </div>
              <div>
              <div className={classes.righHeaderRight}>
              Rs5,999
              </div>
              <div className={classes.gstHeaderRight}>
              +18%GST
              </div>
              </div>
            </div>
            <div className={classes.childDiv}>
            <div className={classes.singleLineTextRight}>Leave your House keys and worries to us.Get tenant super-fast</div>
             <div className={classes.tableDiv}>
               <table className={classes.tableStyle}>
                <tr className={classes.alerTrColorRight}>
                  <td className={classes.tdStyling}><HomeIcon /></td>
                  <td className={classes.tdStyling}>Showing House On Your Behalf</td>
                </tr>
                <tr>
                  <td className={classes.tdStyling}><CardTravelIcon /></td>
                  <td className={classes.tdStyling}>Personal field Assistent</td>
                </tr>
                <tr className={classes.alerTrColorRight}>
                  <td className={classes.tdStyling}><CameraEnhanceIcon /></td>
                  <td className={classes.tdStyling}>Photoshoot of you property</td>
                </tr>
                <tr>
                  <td className={classes.tdStyling}><ScreenLockRotationIcon/></td>
                  <td className={classes.tdStyling}>Privacy of your phone number</td>
                </tr>
                <tr className={classes.alerTrColorRight}>
                  <td className={classes.tdStyling}><YoutubeSearchedForIcon/></td>
                  <td className={classes.tdStyling}>Property Promotion</td> 
                </tr>
                <tr>
                  <td className={classes.tdStyling}><AssignmentReturnIcon /></td>
                  <td className={classes.tdStyling}>Rental Aggreement-Home delivere</td>
                </tr>
                <tr className={classes.alerTrColorRight}>
                  <td className={classes.tdStyling}><VolumeUpIcon/></td>
                  <td className={classes.tdStyling}>Facebbok Marketing of property</td>  
                </tr>          
            </table>
             </div>
             <div className={classes.buttonStyle}>
             <Button variant="contained" color="primary" className={classes.buttonSpec}>
                  BUY NOW
             </Button>
             </div>
            </div>
          </Card>
        </div>
    </div>
  );
}
}

export default withStyles(AppStyle)(App);
