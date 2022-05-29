import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SpecificationsSection = ({ productBlock, frameSelected, frameColorSelected }) => {
  const { settings } = productBlock;
  const [frameData, setFrameData] = useState();
  const [frameWeight, setFrameWeight] = useState('');
  const {
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
  }, [frameSelected, frameColorSelected]);
  return (
    <>
    <div className="pdp-tabs-sec pt-16 text-sm justify-items-center max-w-screen-xxl font-extralight items-center flex flex-row xl:w-10/12 gap-20">
      <div className="mx-auto lg:col-span-2 lg:grid lg:grid-cols-2 gap-5 max-w-screen-xxl">
        <div className="dimensions-col">
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
    </div>
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

SpecificationsSection.defaultProps = {
  productBlock: {},
};

SpecificationsSection.propTypes = {
  productBlock: PropTypes.shape({}),
};

export default SpecificationsSection;
