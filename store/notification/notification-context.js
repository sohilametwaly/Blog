import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotification: (title, message, status) => {},
  hideNotification: () => {},
});

export default NotificationContext;

export function NotificationProvider({ children }) {
  const [notification, setNotification] = useState();
  function showNotification(title, message, status) {
    setNotification({ title, message, status });
  }
  function hideNotification() {
    setNotification(null);
  }
  const context = {
    notification,
    showNotification,
    hideNotification,
  };
  return (
    <NotificationContext.Provider value={context}>
      {children}
    </NotificationContext.Provider>
  );
}
