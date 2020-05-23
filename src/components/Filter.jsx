import React from 'react'
import { Input, Menu, } from 'semantic-ui-react'

const Filter = ({setFilter, filterBy, searchQuery, setSearchQuery}) => (
    <Menu secondary>
        <Menu.Item
          name='all'
          active={filterBy === 'all'}
          onClick={setFilter.bind(this,'all')}>Все
        </Menu.Item>
        <Menu.Item
          name='popular'
          active={filterBy === 'popular'}
          onClick={setFilter.bind(this,'popular')}>По популярности
        </Menu.Item>
        <Menu.Item
          name='price_high'
          active={filterBy === 'price_high'}
          onClick={setFilter.bind(this,'price_high')}>Сначало дорогие
        </Menu.Item>
        <Menu.Item
          name='price_low'
          active={filterBy === 'price_low'}
          onClick={setFilter.bind(this,'price_low')}>Сначало дешевые
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
        </Menu.Item>
      </Menu>
      )

export default Filter