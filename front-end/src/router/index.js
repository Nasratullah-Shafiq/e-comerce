import React from 'react'
import { Routes, Route } from 'react-router-dom';

import MasterLayout from '../layouts/admin/MasterLayout';

function MyRouter(){
    return(
        <Routes>
            <Route path="/" element={<MasterLayout />} />
        </Routes>
    )
}

export default MyRouter;
