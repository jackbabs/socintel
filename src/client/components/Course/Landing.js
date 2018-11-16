import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';



export default class Landing extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          <Menu.Item
            name='look inside'
            active={activeItem === 'look inside'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='table of contents'
            active={activeItem === 'table of contents'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

