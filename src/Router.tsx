import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from "./comps/Layout.tsx";
import ImageSlider from "./comps/ImageSlider.tsx";
import CustomSlider from "./comps/CustomSlider.tsx";

export default function  Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout>
                    <ImageSlider/>
                </Layout>} />
                <Route path="/slide2" element={
                    <Layout>
                        <CustomSlider />
                    </Layout>
                } />
                {/*<Route path="/form3" element={*/}
                {/*    <Layout>*/}
                {/*        <Form3 />*/}
                {/*    </Layout>*/}
                {/*} />*/}
            </Routes>
        </BrowserRouter>
    );
}