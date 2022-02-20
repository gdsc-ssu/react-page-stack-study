import styled from 'styled-components';

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const HelmetContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  flex-shrink: 1;
`;

const HelmetTitle = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const HelmetLeft = styled.div`
  width: 3rem;
  padding: 0.5rem;
  text-align: left;
  color: var(--blue-100);
  cursor: pointer;
`;

const HelmetRight = styled.div`
  width: 3rem;
  padding: 0.5rem;
  text-align: right;
  color: var(--blue-100);
  cursor: pointer;
`;

namespace Helmet {
  export const Container = HelmetContainer;
  export const Left = HelmetLeft;
  export const Right = HelmetRight;
  export const Title = HelmetTitle;
}

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  margin-top: 2rem;
`;

const ContactListItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  flex-shrink: 1;
  cursor: pointer;

  &::after {
    content: '';
    top: auto;
    right: auto;
    left: 1rem;
    transform-origin: 50% 100%;
    transform: translateY(1.5rem);
    position: absolute;
    background-color: var(--list-border-color);
    display: block;
    width: calc(100% - 2rem);
    height: 0.5px;
  }
`;

const ContactListItemIndex = styled.div`
  color: var(--gray-100);
  font-size: 1.5rem;
  font-weight: bold;
`;

const ContactListItemName = styled.div`
  color: var(--white-100);
  font-size: 1rem;
`;

namespace Contacts {
  export const Container = ContactsContainer;
  export const List = ContactList;
  export const Item = ContactListItem;
  export const ItemName = ContactListItemName;
  export const ItemIndex = ContactListItemIndex;
}

export { Contacts, Helmet };
