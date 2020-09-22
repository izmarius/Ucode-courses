import React from 'react';

function Ninjas(props) {
    const {ninjas} = props;
    const ninjaList = ninjas.map(ninja => {
        return  (
            <div classnanme="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
        </div>
        )
    });
    console.log(ninjaList);
    return(
        <div className="ninja-list">
            {ninjaList};
        </div>
    );
}

export default Ninjas;