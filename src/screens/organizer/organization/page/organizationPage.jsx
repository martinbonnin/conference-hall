import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Titlebar from 'components/titlebar'
import { List } from 'components/list'
import AddUserButton from 'components/addUser'
import { Link } from 'redux-little-router'
import IconLabel from 'components/iconLabel'
import MemberRow from '../components/memberRow'

import './organizationPage.css'

const modalMessage = (
  <Fragment>
    <p>
      Search and add a member to your organization, he/she will be also able to update it,
      invite other members and create events for your organization.<br />
      The member must already have a member Hall account.
    </p>
    <p>
      For security and privacy reasons, you can search a member only by his/her registered email
      address.
    </p>
  </Fragment>
)

const OrganizationPage = ({
  id: organizationId,
  name,
  users,
  onSelectUser,
  inviteLink,
  removeMember,
  owner,
  authUserId,
}) => (
  <div className="organization-page">
    <Titlebar className="organization-header" icon="fa fa-users" title={name}>
      <Link href={`/organizer/organizations/${organizationId}/edit`} className="btn">
        <IconLabel icon="fa fa-pencil" label="Edit" />
      </Link>
      <AddUserButton
        modalOptions={{
          id: 'add-user-to-organization',
          message: modalMessage,
          resultsMessage: 'Select an organizer to add to your organization',
          onSelectUser,
          inviteLink,
        }}
      />
    </Titlebar>
    <List
      className="organization-content"
      array={users}
      noResult="No users yet !"
      renderRow={rowProps => (
        <MemberRow
          key={rowProps.id}
          {...rowProps}
          authUserId={authUserId}
          removeMember={() => removeMember(rowProps.id)}
          owner={owner}
        />
      )}
    />
  </div>
)

OrganizationPage.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inviteLink: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.object),
  owner: PropTypes.string.isRequired,
  authUserId: PropTypes.string.isRequired,
  onSelectUser: PropTypes.func.isRequired,
  removeMember: PropTypes.func.isRequired,
}

OrganizationPage.defaultProps = {
  users: [],
}

export default OrganizationPage