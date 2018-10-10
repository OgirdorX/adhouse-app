import React from 'react';

import styled from 'styled-components';

import CampaignList from '../CampaignList';
import DashboardNavBar from '../DashboardNavBar';

const ViewContainer = styled.div`
    height: 100%;
    width: 100%;
`;

const DashboardView = ({ list }) => {
    console.log('dashboardview');
    console.log(list);
    return (
        <ViewContainer>
            <DashboardNavBar title={"AdHouse"} />
            <CampaignList list={list} />
        </ViewContainer>
    )
}

export default DashboardView;