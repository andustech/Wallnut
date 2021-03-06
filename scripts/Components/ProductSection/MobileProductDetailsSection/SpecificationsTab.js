import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../../Tab';
import styled from 'styled-components';

const SpecificationsTab = ({ productTypeBlock }) => {
  const { settings } = productTypeBlock;
  const {
    specifications_tab_heading,
    dimensions_heading,
    frame_size,
    image_size,
    total_weight,
    moulding_width,
    details_heading,
    frame_description,
    paper_description,
    print_description,
    mat_description,
    plexiglass_glazing
  } = settings;

  return (
    <>
      <Tab tabName={specifications_tab_heading}>
        <div className="mx-auto lg:col-span-2 lg:grid lg:grid-cols-2 gap-5 max-w-screen-xxl">
          <div className="dimensions-col">
            <SectionName>{dimensions_heading}</SectionName>
            {frame_size && (
              <ColumnOne>
                <ColumnName>Frame Size</ColumnName>
                <ColumnValue>{frame_size}</ColumnValue>
              </ColumnOne>
            )}
            {image_size && (
              <ColumnOne>
                <ColumnName>Image Size</ColumnName>
                <ColumnValue>{image_size}</ColumnValue>
              </ColumnOne>
            )}
            {total_weight && (
              <ColumnOne>
                <ColumnName>Total Weight</ColumnName>
                <ColumnValue>{total_weight}</ColumnValue>
              </ColumnOne>
            )}
            {moulding_width && (
              <ColumnOne>
                <ColumnName>Moulding Width</ColumnName>
                <ColumnValue>{moulding_width}</ColumnValue>
              </ColumnOne>
            )}
          </div>
          <div>
            <SectionName>{details_heading}</SectionName>
            {frame_description && (
              <ColumnOne>
                <ColumnName>Frame Description</ColumnName>
                <ColumnValue>{frame_description}</ColumnValue>
              </ColumnOne>
            )}
            {paper_description && (
              <ColumnOne>
                <ColumnName>Paper Description</ColumnName>
                <ColumnValue>{paper_description}</ColumnValue>
              </ColumnOne>
            )}
            {print_description && (
              <ColumnOne>
                <ColumnName>Print Description</ColumnName>
                <ColumnValue>{print_description}</ColumnValue>
              </ColumnOne>
            )}
            {mat_description && (
              <ColumnOne>
                <ColumnName>Mat Description</ColumnName>
                <ColumnValue>{mat_description}</ColumnValue>
              </ColumnOne>
            )}
            {plexiglass_glazing && (
              <ColumnOne>
                <ColumnName>Plexiglass Glazing</ColumnName>
                <ColumnValue>{plexiglass_glazing}</ColumnValue>
              </ColumnOne>
            )}
          </div>
        </div>
      </Tab>
    </>
  );
};

const SectionName = styled.div.attrs({
  className: 'pb-8 border-b',
})`
font-family: 'GoodSans';
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: 0.05em;
text-transform: uppercase;`;

const ColumnOne = styled.div.attrs({
  className: 'border-b grid grid-cols-2 gap-4 pt-6 pb-6',
})``;

const ColumnName = styled.div.attrs({
  className: '',
})`
  font-family: 'GoodSans';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

const ColumnValue = styled.div.attrs({
  className: '',
})`
font-family: 'GoodSans';
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: -0.01em;
color: rgba(0, 0, 0, 0.7);
`;

SpecificationsTab.defaultProps = {
  productTypeBlock: {},
};

SpecificationsTab.propTypes = {
  productTypeBlock: PropTypes.shape({}),
};

export default SpecificationsTab;
