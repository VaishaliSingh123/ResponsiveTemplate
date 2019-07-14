const AppStyle = theme => ({
  mainDiv:{
    display:"flex",
    width:"90%",
    height:"100%",
    margin:"10px",
    justifyContent:"space-between",
    overflow:"hidden",

   },
   leftDiv:{
     width:"50%",
     height:"90%",
     margin:"10px"
   },
   rightDiv:{
     width:"50%",
     height:"90%",
     margin:"10px"
   },
   leftHeaderHeight:{
     height:"15vh",
     backgroundColor:"#DC143C",
     display: "flex",
    flexDirection: "row"
   },
   leftHeaderLeft:{
     width:"60%",
     marginLeft: "30px",
    fontSize: "32px",
    color: "white"
   },
   leftHeaderRight:{
    width:"40%",
    color: "white",
    fontSize: "21px",
    justifyCntent: "end",
    marginTop:"2vh"
   },
   singleLineText:{
     margin:"20px",
     color: "red",
     fontSize: "21px"
   },
   tableStyle: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    width: "100%"
  },
  
  tdStyling:{
    textAlign: "left",
    padding: "8px"
  },
  alerTrColor: {
    backgroundColor: "#EDBB99"
  },
  buttonStyle:{
    marginTop:"2vh",
    marginBottom:"2vh"
    
  },
  buttonSpec:{
    width:"100%"
  },
  childDiv:{
    marginTop:"2vh",
    marginLeft:"3vh",
    marginRight:"3vh"
  },



  rightHeaderHeight:{
    height:"15vh",
    backgroundColor:"blue",
    display: "flex",
   flexDirection: "row"
  },
  righHeaderLeft: {
    width:"95%",
     marginLeft: "30px",
    fontSize: "32px",
    color: "white"
  },
  OnlyRighHeaderLeft:{
    marginLeft: "30px",
    fontSize: "18px",
    color: "white"
  },
  righHeaderRight:{
    width:"5%",
    color: "white",
    fontSize: "21px",
    marginLeft: "17vh",
    marginTop: "2vh"
  },
  tableDiv:{
    height:"44vh"
  },
  singleLineTextRight:{
    margin:"20px",
    color: "blue",
    fontSize: "21px"
  }, 
  alerTrColorRight: {
    backgroundColor: "#7FB3D5"
  },
  gstHeaderRight:{
    width:"5%",
    color: "white",
    fontSize: "14px",
    marginLeft: "17vh",
    marginTop: "1vh"
  },
  gstRight:{
    width:"5%",
    color: "white",
    fontSize: "14px",
    marginTop: "1vh"
  }
});
export default AppStyle;