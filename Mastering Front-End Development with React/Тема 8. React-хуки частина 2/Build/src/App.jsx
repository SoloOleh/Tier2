import { useState, useRef } from "react";
// ComponentA.jsx
const ComponentA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

// ComponentB.jsx
const ComponentB = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <button onClick={openSidebar}>Open sidebar</button>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export { ComponentA, ComponentB };
