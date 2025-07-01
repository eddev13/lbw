import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { LinkList } from "../pages/LinkList";
import { LinkPreview } from "../pages/LinkPreview";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<LinkList />} />
        <Route path="/:username" element={<LinkPreview />} />
      </Routes>
    </BrowserRouter>
  );
}
