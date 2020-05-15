import React , { useState , useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
      <div>
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
  </FormControl>
  </div>
  );
};

function Countries () {
    const [countries , setCountryList] = useState([]);

    useEffect(() => {
        setCountryList(['India','Pakistan','Afghan','Guntur'])
    },[]);

    return (
        <div>
            {
                <React.Fragment>
                    <label htmlFor="countries">Choose a Country:</label>
                    <select id="countries" onChange={(evt) => {
                        const value = evt.target.value;
                        setTimeout(() => {
                            alert(`You Selected ${value}`)
                        },0);
                    }}>
                        {
                            countries.map(
                                country => <option value={country}>{country}</option>)
                        }
                    </select>
                </React.Fragment>
            }
        </div>
    )
}

const CheckBox = () => {
    return (
        <div>
              <label htmlFor="hungry">Are you Hungry:</label>
              <input type="checkbox" name="hungry" id="hungry"/>
        </div>
    );
}
export default () => {
    return (
        <React.Fragment>
            <CheckBox/>
            <Countries />
            <RadioButtonsGroup />
        </React.Fragment>
    )
}
