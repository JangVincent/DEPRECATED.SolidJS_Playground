export function HelloWorld() {
  const name = 'Phantola';
  const style = {
    'background-color': '#2c4f7c',
    color: '#fff',
  };

  return <div style={style}>Hello {name}!</div>;
}
