import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("Очікую відповідь...");

  useEffect(() => {
    // 🔹 URL твого бекенду в Codespace, заміни нижче на свій
    fetch("https://stunning-eureka-x5xx957xwjv7c9vj6-8000.app.github.dev/api/ping", {
      redirect: "follow",
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Помилка з'єднання 😥"));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">
        Відповідь бекенду: {message}
      </h1>
    </div>
  );
}
