import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';



const SearchField = (props) => {

    const { handleFilteredFields } = props;
    return (
        <TextField
            id="standard-size-small"
            size="small"
            onChange={e => handleFilteredFields(e)}
            className="textfield"
            autoComplete="off"
            style={{ marginLeft: "10px", paddingTop: "15px", paddingLeft: "1px", height: "15px" }}
            InputProps={Object.assign({ disableUnderline: true },
                {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchOutlinedIcon color="primary" fontSize="small" />
                        </InputAdornment>)
                },
                {
                    style: { paddingLeft: "5px" }
                }
            )} />
    )
}
export default SearchField