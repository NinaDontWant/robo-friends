import React from 'react';

class SearchComponent extends React.Component {
    render() {
        return (
            <div className ='pa2'>
                <input
                    className='pa3 b--green bg-lightest-blue'
                    type='search'
                    placeholder='search robots'
            />
            </div>    
        )
    }
}

//remember tachyon; pa2 padding 2, b--green border green, bg-xxx backgroundcolour

export default SearchComponent;
