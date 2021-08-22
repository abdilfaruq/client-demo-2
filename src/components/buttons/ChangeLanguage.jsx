import React from 'react';
import FLAGS from '../../images/flags/FLAGS';
import Select from 'react-select';
import './ChangeLanguage.css';

const ChangeLanguage = () => {
        return (
                <Select
                className="select-language"
                classNamePrefix="select-language"
                cacheOptions
                defaultOptions
                isSearchable={false}
                placeholder={FLAGS[0].label}
                options={FLAGS}/>
        )
}

export default ChangeLanguage;