import React from 'react';
import { FiEdit, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

const Recipe: React.FC = () => {
  function teste() {
    console.log('oi');
  }

  return (
    <Container>
      <header className="card">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=60"
          alt=""
        />
        <section>
          <p>Comida Americana</p>

          <div>
            <button type="button" className="button-icon">
              <FiEdit />
            </button>

            <button type="button" className="button-icon">
              <FiTrash />
            </button>
          </div>
        </section>
      </header>

      <header className="card">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=60"
          alt=""
        />
        <section>
          <p>Comida Americana</p>

          <div>
            <button type="button" className="button-icon">
              <FiEdit />
            </button>

            <button type="button" className="button-icon">
              <FiTrash />
            </button>
          </div>
        </section>
      </header>

      <header className="card">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=60"
          alt=""
        />
        <section>
          <p>Comida Americana</p>

          <div>
            <button type="button" className="button-icon">
              <FiEdit />
            </button>

            <button type="button" className="button-icon">
              <FiTrash />
            </button>
          </div>
        </section>
      </header>

      <header className="card">
        <img
          src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=60"
          alt=""
        />
        <section>
          <p>Comida Americana</p>

          <div>
            <button type="button" className="button-icon">
              <FiEdit />
            </button>

            <button type="button" className="button-icon">
              <FiTrash />
            </button>
          </div>
        </section>
      </header>
    </Container>
  );
};

export default Recipe;
