import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "./comps/Layout.tsx";
import Template1 from "./pages/Template1.tsx";

export default function  Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout>
                    <Template1 />
                </Layout>} />
                {/*<Route path="/form2" element={*/}
                {/*    <Layout>*/}
                {/*        <Form2 />*/}
                {/*    </Layout>*/}
                {/*} />*/}
                {/*<Route path="/form3" element={*/}
                {/*    <Layout>*/}
                {/*        <Form3 />*/}
                {/*    </Layout>*/}
                {/*} />*/}
            </Routes>
        </BrowserRouter>
    );
}