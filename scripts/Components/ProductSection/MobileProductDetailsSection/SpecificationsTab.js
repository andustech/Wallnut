import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import Tab from '../../Tab';
import styled from 'styled-components';

const SpecificationsTab = ({ productTypeBlock, frameSelected, frameColorSelected }) => {
  const { settings } = productTypeBlock;
  const [frameData, setFrameData] = useState();
  const [frameWeight, setFrameWeight] = useState('');
  const [frameDesc, setFrameDesc] = useState('');

  const {
    specifications_tab_heading,
    dimensions_heading,
    details_heading,
    frame_description,
    paper_description,
    print_description,
    mat_description,
    plexiglass_glazing
  } = settings;

  const arr = {
    '18" x 24"': {
      frame_size: '19.4” x 25.4” x 1”',
      moulding_width: '1”',
      image_size: '13” x 19.5”',
      total_weight: {
        'Walnut Wood': '3.9 lbs',
        'Matte Black': '4.1 lbs',
        'Matte White': '4.1 lbs',
      },
    },
    '24" x 32"': {
      frame_size: '25.4” x 33.4” x 1”',
      moulding_width: '1”',
      image_size: '18” x 27”',
      total_weight: {
        'Walnut Wood': '6.1 lbs',
        'Matte Black': '6.3 lbs',
        'Matte White': '6.3 lbs',
      },
    },
    '30" x 40"': {
      frame_size: '32.2” x 42.2” x 1”',
      moulding_width: '1”',
      image_size: '23” x 34.5”',
      total_weight: {
        'Walnut Wood': '9.8 lbs',
        'Matte Black': '11.2 lbs',
        'Matte White': '11.2 lbs',
      },
    },
    '32" x 44"': {
      frame_size: '34.25” x 46.25” x 1”',
      moulding_width: '1.5”',
      image_size: '25” x 37.5”',
      total_weight: {
        'Walnut Wood': '12.6 lbs',
        'Matte Black': '13.8 lbs',
        'Matte White': '13.8 lbs',
      },
    },
  };

  const frameDescArr = {
    'Walnut Wood': 'Solid wood - FSC certified pine wood, stained finish',
    'Matte Black': 'Engineered wood from FSC certified sources, painted finish',
    'Matte White': 'Engineered wood from FSC certified sources, painted finish',
  }

  useEffect(() => {
    for (const key in arr) {
      if (key.toString() === frameSelected) {
        setFrameData(arr[key]);
        const temp = arr[key];
        for (const k in temp.total_weight) {
          if (k.toString() === frameColorSelected.toString()) {
            setFrameWeight(temp.total_weight[k]);
          }
        }
      }
    }

    for (const key in frameDescArr) {
      if (key.toString() === frameColorSelected.toString()) {
        setFrameDesc(frameDescArr[key]);
      }
    }

  }, [frameSelected, frameColorSelected]);

  return (
    <>
      <Tab tabName={specifications_tab_heading}>
        <div className="mx-auto lg:col-span-2 lg:grid lg:grid-cols-2 gap-5 max-w-screen-xxl">
          <div className="mobile-dimensions-col mb-4">
            <SectionName>{dimensions_heading}</SectionName>
            <ColumnOne>
              <ColumnName>Frame Size</ColumnName>
              <ColumnValue>{frameData?.frame_size}</ColumnValue>
            </ColumnOne>
            <ColumnOne>
              <ColumnName>Image Size</ColumnName>
              <ColumnValue>{frameData?.image_size}</ColumnValue>
            </ColumnOne>
            <ColumnOne>
              <ColumnName>Total Weight</ColumnName>
              <ColumnValue>{frameWeight}</ColumnValue>
            </ColumnOne>
            <ColumnOne>
              <ColumnName>Moulding Width</ColumnName>
              <ColumnValue>{frameData?.moulding_width}</ColumnValue>
            </ColumnOne>
          </div>
          <div className="mobile-details-col">
            <SectionName>{details_heading}</SectionName>
            <ColumnOne>
              <ColumnName>Frame Description</ColumnName>
              <ColumnValue>{frameDesc}</ColumnValue>
            </ColumnOne>
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
  className: 'pb-5',
})`
font-family: 'GoodSans';
font-weight: 400;
font-size: 12px;
line-height: 20px;
letter-spacing: 0.04em;
text-transform: uppercase;`;

const ColumnOne = styled.div.attrs({
  className: 'grid grid-cols-2 gap-4 pb-4',
})``;

const ColumnName = styled.div.attrs({
  className: 'col-name',
})`
  font-family: 'GoodSans';
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.01em;
`;

const ColumnValue = styled.div.attrs({
  className: 'col-val',
})`
font-family: 'GoodSans';
font-weight: 400;
font-size: 12px;
line-height: 18px;
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
