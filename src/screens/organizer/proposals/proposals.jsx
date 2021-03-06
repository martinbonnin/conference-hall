import React from 'react'
import PropTypes from 'prop-types'

import Titlebar from 'components/titlebar'
import ProposalFilters from './proposalFilters'
import ProposalsList from './proposalsList'
import ProposalsPaging from './proposalsPaging'

const Proposals = ({ eventId, nbProposals }) => {
  const title = nbProposals > 0 ? `Proposals (${nbProposals})` : 'Proposals'
  return (
    <div>
      <Titlebar icon="fa fa-paper-plane" title={title} className="no-print" />
      <ProposalFilters eventId={eventId} />
      <ProposalsList eventId={eventId} />
      <ProposalsPaging />
    </div>
  )
}

Proposals.propTypes = {
  eventId: PropTypes.string.isRequired,
  nbProposals: PropTypes.number.isRequired,
}

export default Proposals
