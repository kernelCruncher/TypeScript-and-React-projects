import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { Todo, fetchTodos, deleteTodo } from "../actions";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
  state = { fetching: false };
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.state = { fetching: true };
  };
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}> Fetch </button>
        {this.state.fetching ? "LOADING" : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);