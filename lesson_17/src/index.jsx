import React from 'react';
import ReactDOM from 'react-dom';
import './article.scss';

class Article extends React.Component {
  render() {
    const styles = {
      background: 'red',
    };
    console.log(this.props.myCoolAttribute);
    return (
      <section>
        <h2 className='article__title article__title_outlined' style={styles}>
          HELLO {this.props.helloWorld}
        </h2>
        <p className='article__content'>{this.props.content}</p>
      </section>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <header>HEADER</header>
        <main>
          CONTENT
          <Article
            helloWorld='First ARTICLE'
            test={20}
            myCoolAttribute={[1, 2, 3, 4]}
            content={
              'Medium — платформа для социальной журналистики. Сервис запущен в августе 2012 года сооснователями Twitter – Эваном Уильямсом и Бизом Стоуном. Для описания Medium часто используется понятие platisher. Его ввёл исполнительный директор социального новостного сайта Sulia Джонатан Глик в своей статье для '
            }
          />
          <Article helloWorld='SECOND ARTICLE' content={'TEST TEST CONTENT'} />
        </main>
        <footer>FOOTER</footer>
      </div>
    ); // JSX
  }
}

ReactDOM.render(<App />, document.querySelector('.react-root'));
