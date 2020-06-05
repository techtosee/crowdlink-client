import React from 'react';
import { useHistory } from 'react-router-dom';
import { useWeb3Context } from 'web3-react';
import {
  PUBLISHER_SIGN_UP_ROUTE,
  PUBLISHER_FEED_ROUTE,
  PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM,
  PUBLISHER_GA_CONNECT_ROUTE,
} from '../../routes-config';
import {
  CardContainerLayout,
  ParagraphButton,
  CustomParagraph,
  CardLayoutWithBorder,
  CustomH2,
  CloseButtonContainer,
  ColumnContainer,
  CardSubContainer,
} from '../shared/GeneralCard';
import { RowContainer } from '../shared/PublisherWizard/styles';

// move to constant.js
export const REWARD_PER_SALE_WORKFLOW = 'PAY_PER_SALE';
export const REWARD_PER_CLICK_WORKFLOW = 'PAY_PER_CLICK';

const PublisherWorkflow = () => {
  const history = useHistory();
  const { active } = useWeb3Context();

  return (
    <CardContainerLayout>
      <CardLayoutWithBorder>
        <CloseButtonContainer>
          <ParagraphButton
            buttonMargin="6px 12px 0 0"
            buttonFontSize={20}
            buttonFontWeight={900}
            buttonColor="#959090"
            onClick={() => history.push('/')}
          >
            x
          </ParagraphButton>
        </CloseButtonContainer>
        <CardSubContainer subContainerHeight="100%" justify="space-around" align="flex-start">
          <CustomH2 h2FontWeight={600} h2FontSize={26}>
            I want my referral link to:
          </CustomH2>
          {/* <RowContainer containerJustify="around" containerWidth="100%"> */}
          <div>
            <ParagraphButton
              buttonColor="#7838D5"
              buttonFontWeight={900}
              buttonFontSize={24}
              onClick={() =>
                history.push({
                  pathname: active ? PUBLISHER_GA_CONNECT_ROUTE : PUBLISHER_SIGN_UP_ROUTE,
                  workflow: REWARD_PER_SALE_WORKFLOW,
                })}
            >
              Create +
            </ParagraphButton>
            <CustomParagraph paragraphFontSize={20} paragraphColor="#696868">
              reward per sale (commission)
            </CustomParagraph>
          </div>

          <div>
            <ParagraphButton
              buttonColor="#4C83D4"
              buttonFontWeight={900}
              buttonFontSize={24}
              onClick={() =>
                history.push({
                  pathname: active
                    ? `${PUBLISHER_DASHBOARD_ROUTE_WITH_PARAM}/clicks`
                    : PUBLISHER_SIGN_UP_ROUTE,
                  workflow: PUBLISHER_SIGN_UP_ROUTE,
                })}
            >
              Create +
            </ParagraphButton>
            <CustomParagraph paragraphFontSize={20} paragraphColor="#696868">
              reward per click (traffic)
            </CustomParagraph>
          </div>
          {/* </RowContainer> */}

          <div>
            <CustomParagraph paragraphColor="#696868" paragraphFontSize={20}>
              Already created a campaign? Go to
              <ParagraphButton
                buttonColor="#4C83D4"
                buttonMargin="0 0 0 6px"
                onClick={() => history.push(PUBLISHER_FEED_ROUTE)}
              >
                dashboard
              </ParagraphButton>
            </CustomParagraph>
          </div>

          {/* <ColumnContainer horizontalAlign="center" columnContainerWidth="100%">
            <CustomH2 h2Width="50%" h2FontWeight={600} h2FontSize={26}>
              Already created a campaign?
            </CustomH2>
            <ColumnContainer horizontalAlign="center" columnContainerWidth="50%">
              <ParagraphButton
                buttonColor="#4C83D4"
                buttonFontWeight={900}
                buttonFontSize={24}
                onClick={() => history.push(PUBLISHER_FEED_ROUTE)}
              >
                dashboard +
              </ParagraphButton>
              <CustomParagraph paragraphFontSize={20} paragraphColor="#696868">
                go to your camapaign feed
              </CustomParagraph>
            </ColumnContainer>
          </ColumnContainer> */}
        </CardSubContainer>
      </CardLayoutWithBorder>
    </CardContainerLayout>
  );
};

export default PublisherWorkflow;
