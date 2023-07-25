const container = document.querySelector(`#root`);

const generateColorNumber = () => {
  return Math.floor(Math.random() * 255);
};

const generateRandomColor = () => {
  return `rgb(${generateColorNumber()},${generateColorNumber()},${generateColorNumber()})`;
}

const App = () => {
  const shapes = [
    {
      id: 1,
      class: `circle`,
      color: generateRandomColor(),
    },
    {
      id: 2,
      class: `circle`,
      color: generateRandomColor(),
    },
    {
      id: 3,
      class: `circle`,
      color: generateRandomColor(),
    },
    {
      id: 4,
      class: `square`,
      color: generateRandomColor(),
    },
    {
      id: 5,
      class: `square`,
      color: generateRandomColor(),
    },
    {
      id: 6,
      class: `square`,
      color: generateRandomColor(),
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
      (shapeColor = generateRandomColor())
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
