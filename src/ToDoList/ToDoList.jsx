import React from 'react';
import moment from 'moment';
import './ToDoList.css';
import { Item } from '../Item/Item';
import { Input } from '../Input/Input';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      list: [
        {
          id: '5',
          value: 'Learn React with Gigi Codes video on YouTube',
          date: '7:30 PM',
          checked: false,
        },
        {
          id: '2',
          value: 'Follow @gigi_codes on Instagram',
          date: '8:30 PM',
          checked: false,
        },
        {
          id: '53',
          value: 'Like and Subscribe Gigi Codes YouTube Channel',
          date: '6:30 PM',
          checked: false,
        },
      ],
    };
  }

  addItem(e) {
    e.preventDefault();
    if (this.state.item !== '') {
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.item.slice(),
        date: moment().format('LT'),
        checked: false,
      };

      let list = [...this.state.list];

      list.push(newItem);

      this.setState({ list, newItem, item: '' });
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  crossItem(id) {
    const list = this.state.list;

    const item = list.findIndex((item) => item.id === id);

    let updatedItem = list[item];

    updatedItem.checked = !updatedItem.checked;

    const newTodoList = [...list];

    newTodoList[item] = updatedItem;

    this.setState({ list: newTodoList });
  }

  render() {
    return (
      <div className='ToDoContainer'>
        <div className='ToDoList'>
          <div className='TodoHeader'>
            <h2>To do</h2>
            <span className='DateHeading'>{moment().format('lll')}</span>
            <Input
              onSubmit={(e) => this.addItem(e)}
              onChange={(e) => this.updateInput('item', e.target.value)}
              value={this.state.item}
            />
          </div>
          <ul className='ListCont'>
            {this.state.list.map((item) => (
              <Item
                id={item.id}
                checked={item.checked}
                value={item.value}
                date={item.date}
                crossItem={() => this.crossItem(item.id)}
                item={item}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ToDoList;
