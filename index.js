const container = document.querySelector(`#root`);

const generateColorNumber = () => {
  return Math.floor(Math.random() * 255);
};

const App = () => {
  const shapes = [
    {
      id: 1,
      class: `circle`,
      color: ``,
    },
    {
      id: 2,
      class: `circle`,
      color: ``,
    },
    {
      id: 3,
      class: `circle`,
      color: ``,
    },
    {
      id: 4,
      class: `square`,
      color: ``,
    },
    {
      id: 5,
      class: `square`,
      color: ``,
    },
    {
      id: 6,
      class: `square`,
      color: ``,
    },
  ];

  return (
    <>
      <h1>Circles and Squares</h1>
      <section className="flex">
        {shapes.map((shape) => (
          <ShapeRender shape={shape} />
        ))}
      </section>
    </>
  );
};

const ShapeRender = ({ shape }) => {
  let [shapeColor, setShapeColor] = React.useState(shape.color);

  const changeColor = () => {
    setShapeColor(
      (shapeColor = `rgb(${generateColorNumber()},${generateColorNumber()},${generateColorNumber()})`)
    );
  };

  return (
    <>
      <section>
        <div
          key={shape.id}
          className={shape.class}
          style={{ backgroundColor: shapeColor }}
        ></div>
        <button onClick={changeColor}>Click Me!</button>
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(container);
root.render(<App />);
