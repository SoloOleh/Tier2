const App = () => {
  const [lang, setLang] = useState("uk");

  return (
    <>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </>
  );
};
