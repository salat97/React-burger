import React from 'react';
import Aux from '../Hoc/Auxx';

const layout = (props: any) => (
    <Aux>
        <div>Toolbar Sidedrawer Backdrawere</div>
        <main>{props.children}</main>
    </Aux>
);

export default layout;