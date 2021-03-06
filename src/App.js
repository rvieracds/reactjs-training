import React from 'react';
import clsx from 'clsx';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import ReactCodeInput from 'react-code-input'



import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



// import logo from './logo.svg';
import documentIcon from './pdf-icon.svg';

import './App.css';

const renderStatus = (status) => {
  let cmp = null;

  switch(status) {
    case 'Approved': {
      cmp = <div className="status-reactangle-class" style={{ background: 'rgba(0,161,158,0.1)' }}>{ status }</div>;
      break; 
    }
    case 'Review': {
      cmp = <div className="status-reactangle-class" style={{ background: 'rgba(92,8,255,0.1)' }}>{ status }</div>;
      break; 
    }
    case 'Terms': {
      cmp = <div className="status-reactangle-class" style={{ background: 'rgba(34,0,14,0.1)' }}>{ status }</div>;
      break; 
    }
    case 'Disapproved': {
      cmp = <div className="status-reactangle-class" style={{ background: 'rgba(239,36,0,0.1)' }}>{ status }</div>;
      break; 
    }
    default: {
      cmp = <div className="status-reactangle-class">-</div>;
      break; 
    }
  }
  return cmp;
}

const applicants = [
  { id: 1, name: 'Arbol Mendez', score: 650, progress: 3, assigned: 'Lolo', status: 'Approved', date: 2 },
  { id: 2, name: 'Banana Dulce', score: 550, progress: 2, assigned: 'Pepe', status: 'Review', date: 3 },
  { id: 3, name: 'Teclado Lopez', score: 451, progress: 5, assigned: 'Abcde', status: 'Disapproved', date: 5 },
  { id: 4, name: 'Reloj Fijo', score: 412, progress: 2, assigned: 'Lolo', status: 'Review', date: 5 },
  { id: 5, name: 'Celular Golpeado', score: 650, progress: 5, assigned: 'Koko', status: 'Approved', date: 2 },
  { id: 6, name: 'Botella Dura', score: 940, progress: 1, assigned: 'Pepe', status: 'Terms', date: 4 },
  { id: 7, name: 'Dia Soleado', score: 700, progress: 5, assigned: 'Lolo', status: 'Approved', date: 2 },
  { id: 8, name: 'Monitor Plano', score: 630, progress: 8, assigned: 'Pepe', status: 'Disapproved', date: 1 },
  { id: 9, name: 'Mate Amargo', score: 500, progress: 4, assigned: 'Abcde', status: 'Approved', date: 2 },
  { id: 10, name: 'Luana Marquez', score: 730, progress: 5, assigned: 'Koko', status: 'Terms', date: 1 },
  { id: 11, name: 'Yerba Mate', score: 650, progress: 7, assigned: 'Pepe', status: 'Review', date: 2 },
  { id: 12, name: 'Jackita La Zorra', score: 895, progress: 10, assigned: 'Abcde', status: 'Approved', date: 6 },
];


const utilityBillsList = [
  { id: 1, name: 'Mobile bill', status: '', date: 'December 2019' },
  { id: 2, name: 'Television bill', status: '', date: 'December 2019' },
  { id: 3, name: 'Electricity bill', status: '', date: 'December 2019' },
  { id: 4, name: 'Health bill', status: '', date: 'December 2019' },
  { id: 5, name: 'Rent bill', status: '', date: 'December 2019' },
  { id: 6, name: 'Car loan bill', status: '', date: 'December 2019' },
];

const statementsList = [
  { id: 1, name: 'Mobile money statement', status: '', date: 'December 2019' },
  { id: 2, name: 'Nigeria Bank statement', status: '', date: 'December 2019' },
];



const nameCell = (cell, row, rowIndex, formatExtraData) => {
  return (
    <div>
      <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=48" style={{ marginRight: 12 }} className="img-pic" />
      { cell }
    </div>
  )
}

const assignedCell = (cell, row, rowIndex, formatExtraData) => {
  return (
    <div>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{ marginRight: 12 }} className="img-pic-small" />
      { cell }
    </div>
  )
}

const progressCell = (cell, row, rowIndex, formatExtraData) => {
  // const { deleteMe } = props;
  // const rowId = row.id;
  const progress = cell * 10;
  return (
    // <Button icon labelPosition='left' onClick={() => deleteMe(rowIndex, rowId)}><Icon name='remove' /> Remove </Button> );
    <div>
      <ProgressBar now={progress} variant="custom-progress-bar" />
    </div>
  )
}

const dateCell = (cell, row, rowIndex, formatExtraData) => {
  return (
    <div>
      {(cell === 1) ? 'a day ago' : `${cell} days ago`}
    </div>
  )
}

const statusCell = (cell, row, rowIndex, formatExtraData) => {
  return renderStatus(cell);
}

const columns = [{
  dataField: 'name',
  text: 'Name',
  headerClasses: 'header-title-class',
  formatter: nameCell
}, {
  dataField: 'score',
  text: 'Score',
  headerClasses: 'header-title-class',
  sort: true,
  // sortCaret: (order, column) => {
  //   if (!order) return (<span>&nbsp;&nbsp;Desc/Asc</span>);
  //   else if (order === 'asc') return (<span>&nbsp;&nbsp;Desc/<font color="red">Asc</font></span>);
  //   else if (order === 'desc') return (<span>&nbsp;&nbsp;<font color="red">Desc</font>/Asc</span>);
  //   return null;
  // }
}, {
  dataField: 'progress',
  text: 'Progress',
  headerClasses: 'header-title-class',
  formatter: progressCell
}, {
  dataField: 'assigned',
  text: 'Assigned',
  headerClasses: 'header-title-class',
  formatter: assignedCell,
}, {
  dataField: 'status',
  text: 'Status',
  headerClasses: 'header-title-class',
  formatter: statusCell,
}, {
  dataField: 'date',
  text: 'Date',
  headerClasses: 'header-title-class',
  formatter: dateCell,
  sort: true,
}];

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total">
    {/* Showing { from } to { to } of { size } Results */}
    { from }-{ to } of { size }
  </span>
);

// const sizePerPageOptionRenderer = ({
//   text,
//   page,
//   onSizePerPageChange
// }) => (
//   <li
//     key={ text }
//     role="presentation"
//     className="dropdown-item"
//   >
//     <a
//       href="#"
//       tabIndex="-1"
//       role="menuitem"
//       data-page={ page }
//       onMouseDown={ (e) => {
//         e.preventDefault();
//         onSizePerPageChange(page);
//       } }
//       style={ { color: 'red' } }
//     >
//       { text }
//     </a>
//   </li>
// );

const options = {
  paginationSize: 10,
  pageStartIndex: 0,
  // alwaysShowAllBtns: true, // Always show next and previous button
  // withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  // sizePerPageOptionRenderer,
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: applicants.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

const useStyles = makeStyles(theme => ({
  root: {
    width: 360,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(34, 0, 14, 0.2)',
    "& label": {
      fontSize: 16,
      color: 'rgba(34, 0, 14, 0.54)',
    },
    "& label.Mui-focused": {
      color: "#00a19e"
    },
    "& input:valid + fieldset": {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: 'rgba(34, 0, 14, 0.2)',
    },
    "& input:valid:focus + fieldset": {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#00a19e",
      background: 'rgba(0, 161, 158, 0.05)',
    },

    // ".MuiOutlinedInput-colorSecondary.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: 'orange',
    // },
    // ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    //   borderColor: "#3f51b5",
    //   borderWidth: 10,
    // }
  },
  error: {
    width: 360,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ef2400",
    background: 'white',
    "& input:valid:focus + fieldset": {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#ef2400",
      background: 'white',
    }
  },
  passwordInput: {
    width: 360,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(34, 0, 14, 0.2)',
    "& label.Mui-focused": {
      color: "#00a19e",
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#00a19e",
      background: 'rgba(0, 161, 158, 0.05)',
    },
    "& label.Mui-focused": {
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#00a19e",
      background: 'rgba(0, 161, 158, 0.05)',
    },
  },
  input: {
    display: 'none',
  },
  filledButton: {
    backgroundColor: '#ff086e',
    boxShadow: 'none',

    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',

    '&:hover': {
      backgroundColor: '#ff086e',
      boxShadow: 'none',
    },



    '@media screen and (max-width: 320px)': {
      fontSize: '4vw',
    },

  },
  
  unfilledButton: {
    backgroundColor: '#fff',
    boxShadow: 'none',

    fontSize: 16,
    color: '#ff086e',
    fontFamily: 'ObjektivMk2-Medium',

    '&:hover': {
      backgroundColor: '#fff',
      boxShadow: 'none',
    },


    '@media screen and (max-width: 320px)': {
      fontSize: '4vw',
    },

  },


  passcodeInput: {
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0
    }
  },



  submitDocsButton: {
    // backgroundColor: '#ff086e',
    boxShadow: 'none',

    // fontSize: 16,
    // color: '#fff',
    // fontWeight: 'bold',


    fontFamily: 'ObjektivMk2',
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    color: 'rgb(34,0,14,0.32)',
    width: 302,
    height: 43,
    borderRadius: 8,
    backgroundColor: '#d3cccf',

    '@media screen and (max-width: 690px)': {
      flex: 1,
      marginTop: 5,
    },
    '@media screen and (max-width: 320px)': {
      width: 'auto',
      fontSize: '4vw',
    },

    '&:hover': {
      backgroundColor: '#d3cccf',
      boxShadow: 'none',
    },
  },


}));




// const inputProps = {
//   className: "inputPEPE",
//   inputStyle: {
//     fontSize: '30px',
//     width: '50px',
//     margin: '4px',
//     height: '50px',
//     MozAppearance: 'none',
//     marginBottom: '8px',
//     textAlign: 'center'
//   }
// }





// const CustomTextField = withStyles({
//   root: {
//     "& input:valid + fieldset": {
//       borderColor: "green",
//       borderWidth: 2
//     },
//     "& input:invalid + fieldset": {
//       borderColor: "red",
//       borderWidth: 2
//     },
//     "& input:valid:focus + fieldset": {
//       background: "red",
//       padding: "4px !important" // override inline-style
//     }
//   }
// })(TextField);

// const [values, setValues] = React.useState({
//   amount: '',
//   password: '',
//   weight: '',
//   weightRange: '',
//   showPassword: false,
// });

const handleChange = prop => event => {
  // setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  // setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = event => {
  event.preventDefault();
};













const renderDocumentItemContainer = (classes) => (
  <div className="documents-rectangle-class" style={{ justifyContent: 'space-between', marginBottom: 16 }}>

    <div className="row-section-one">
      {/* <div style={{ marginRight: 24 }} > */}
      <div style={{ marginRight: 0 }} >
        <img src={documentIcon} className="documents-rectangle-icon-class"/>
      </div>

      <div style={{ flex: 1, flexDirection: 'column' }} >
        <div className="documents-title-left-side-text" >
          Mobile bill
        </div>
        <div className="documents-subtitle-left-side-text" >
          Bill for December 2019
        </div>
      </div>
    </div>

    <div className="row-section-two" >
        <Button className={classes.unfilledButton}>Don’t have it</Button>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        />
        <label htmlFor="contained-button-file" style={{ marginBottom: 0 }}>
          <Button variant="contained" component="span" className={classes.filledButton} >
            Upload
          </Button>
        </label>
    </div>

  </div>
);



function App() {
  const classes = useStyles();


  const values = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    // showPassword: true,
  }

  return (
    // <div style={{ margin: '27px 52px' }}>
    <div style={{}}>



      {/* DASHBOARD SCREEN AND INPUTS */}
      {/* <BootstrapTable
        bootstrap4
        keyField="id"
        data={applicants}
        columns={columns}
        pagination={paginationFactory(options)}
        // hover
        defaultSorted={ defaultSorted }
        // rowStyle={{ backgroundColor: 'white', padding: '50px 50px', margin: '0 100px' }}
        rowClasses="custom-row-class"
        headerClasses="custom-header-class"
        bordered={ false }
      />

      <form noValidate autoComplete="off" >

        <TextField
          id="name-input"
          variant="outlined"
          label="Name"
          className={classes.root}
          disabled={false}
          error={false}
          helperText="Enter your full name"
        />

        <div style={{ margin: 50 }}></div>

        <TextField
          id="error-input"
          variant="outlined"
          label="Error"
          className={classes.error}
          disabled={false}
          error={true}
          helperText="This field is required"
        />

        <div style={{ margin: 50 }}></div>

        <TextField
          id="disable-input"
          variant="outlined"
          label="Disabled"
          className={classes.root}
          disabled={true}
          error={false}
          helperText="Enter your full name"
        />
      </form>

      <div style={{ margin: 50 }}></div>

      <FormControl className={classes.root} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={'lalala'}
            // value={values.password}
            className={classes.root}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl> */}







        
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md" style={{ marginTop: 24, marginBottom: 87 }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              <p className="upload-docs-title">Upload documents and increase your score</p>
              <p className="upload-docs-subtitle">Utility Bills</p>
            </div>
            {statementsList.map(item => renderDocumentItemContainer(classes))}

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              <p className="upload-docs-subtitle">Statements</p>
            </div>
            {statementsList.map(item => renderDocumentItemContainer(classes))}


            <div className="section-three-class">
              <p className="documents-uploaded-text" style={{ margin: 0, marginLeft: "auto" }} >
                0 of 5 documents uploaded
              </p>  
              <Button variant="contained" component="span" className={classes.submitDocsButton}>
                Submit documents
              </Button>
            </div>

          </Container>
        </React.Fragment>


        {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}> */}
          {/* <div style={{ display: 'flex', width: 944, flexDirection: 'column', alignItems: 'left' }}>
            <p className="upload-docs-title">Upload documents and increase your score</p>
            <p className="upload-docs-subtitles">Utility Bills</p>
          </div>
          <div>
            {utilityBillsList.map(item => renderDocumentItemContainer(classes))}
          </div> */}
          
          {/* <div style={{ display: 'flex', width: 944, flexDirection: 'column', alignItems: 'left' }}>
            <p className="upload-docs-subtitles">Statements</p>
          </div> */}
          {/* <div>
            {statementsList.map(item => renderDocumentItemContainer(classes))}
          </div> */}
{/* 
          <div style={{ display: 'flex', marginTop: 62, alignItems: 'center', width: 944 }}>
            <p className="" style={{ margin: 0, marginLeft: "auto", marginRight: 24 }} >
              0 of 5 documents uploaded
            </p>  
            <Button variant="contained" component="span" className={classes.submitDocsButton}>
              Submit documents
            </Button>
          </div> */}

        {/* </div> */}



















      {/* LOGIN INPUT PASSCODE COMPONENT  */}
      {/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ marginTop: 38 }} className="login-big-title">
          Login with SMS code sent to your mobile
        </div>
        <div style={{ marginTop: 8, marginBottom: 38 }} className="login-sent-to-title">
          Sent to 650-338-8515
        </div>
        <ReactCodeInput
          type='number'
          fields={5}
          autoFocus
          // {...inputProps}
          inputStyle={{
            width: 45,
            height: 50,
            borderRadius: 4,
            backgroundColor: 'rgba(34,0,14,0.1)',
            borderWidth: 0,
            textAlign: 'center',
            marginRight: 16,
            MozAppearance: 'textfield',
          }}
        />
        <div style={{ marginTop: 60 }} className="login-request-code-title">
          Request another code in 1:00
        </div>
      </div> */}


    </div>
  );
}

export default App;
