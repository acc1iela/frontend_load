import React from 'react';

const TitleContext = React.createContext('');

const Title = () => {
  return <TitleContext.Consumer>{(title) => <span>{title}</span>}</TitleContext.Consumer>;
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

const Page = () => {
  const title = 'React Book';

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
