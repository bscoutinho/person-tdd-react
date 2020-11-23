import React from 'react'
import { shallow } from 'enzyme'
import PersonList from './PersonList'

describe('PersonList', () => {
    it('renders a ul element', () => {
        const personListWrapper = shallow(<PersonList />)
        const peopleListUls = personListWrapper.find('ul')

        expect(peopleListUls).toHaveLength(1)
    })

    it('renders no li element when no people exists', () => {
        const people = []
        const personListWrapper = shallow(<PersonList people={people} />)
        const peopleListItems = personListWrapper.find('li')

        expect(peopleListItems).toHaveLength(0)
    })

    it('renders one li element when one person exist', () => {
        const people = [{firstName: 'Bruno', lastName: 'Coutinho'}]
        const personListWrapper = shallow(<PersonList people={people} />)
        const peopleListItems = personListWrapper.find('li')

        expect(peopleListItems).toHaveLength(1)
    })
})
