import React from 'react';

import {ClassCounter} from './class-counter';
import {HookCounter} from './hook-counter';

export const UseStatePage = () => (
  <>
    <h2>Hook useState</h2>
    <h3>Estado con componente clase</h3>
    <ClassCounter />

    <hr />
    <h3>Estado con el Hook useState</h3>
    <HookCounter />
  </>
);

// import React from 'react';

// export const UseStatePage = () => (
//   <>
//     <h2>Hook useState</h2>
//     <p>Sigue las instrucciones que vienen en el curso.</p>
//   </>
// );


