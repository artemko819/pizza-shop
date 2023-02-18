import 'assets/scss/app.scss'
import { Categories, Header, PizzaBlock, Sort } from 'components';
import  pizzas from 'data/db.json'
import { IPizza } from 'types/pizza';

function App() {
  const data:IPizza[] = pizzas
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {data.map((pizza) => (
              <PizzaBlock key={pizza.id} 
                          {...pizza}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
