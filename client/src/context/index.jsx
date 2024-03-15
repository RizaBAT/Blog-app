import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [pending, setPending] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        blogList,
        setBlogList,
        pending,
        setPending,
        formData,
        setFormData,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
