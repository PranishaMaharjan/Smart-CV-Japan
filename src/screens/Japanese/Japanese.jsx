import React from 'react';
import {
  Document,
  Page,
  StyleSheet,
  Font,
  Text,
  View,
  Image,
} from '@react-pdf/renderer';

import { Table, TR, TD } from '@ag-media/react-pdf-table';
import { differenceInYears, formatDate } from 'date-fns';

import { CvFieldsSchemaType } from '@/lib/zod';
import { idHandler } from '@/utils/helper';
import Documents from '../CvMaker/documents';
// import { CvFieldsSchemaType } from '@/lib/zod';
// import { idHandler } from '@/utils/helper';

Font.register({
  family: 'NotoSansJP',
  src: '/fonts/NotoSansJP-Regular.ttf',
});

export const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    fontFamily: 'NotoSansJP',
  },
  heading: {
    fontSize: '14px',
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'space-between',
    width: '80%',
  },
  personalDetailSection1: {
    flexDirection: 'row',
    width: '80%',

    fontSize: 10,
    display: 'flex',
  },
  personalDetailSection2: {
    flexDirection: 'row',

    fontSize: 10,
    display: 'flex',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  column: {
    flexDirection: 'column',
  },
  cell1: {
    flex: 1, // Each cell takes equal space
    borderColor: '#000',
    textAlign: 'center',
    color: 'black',
  },
  cell_5: {
    flex: 0.8, // Each cell takes equal space
    borderColor: '#000',
    textAlign: 'center',
    color: 'black',
  },
  cell2: {
    flex: 2, // Each cell takes equal space
    borderColor: '#000',
    textAlign: 'center',
    color: 'black',
  },
  cell3: {
    flex: 3, // Each cell takes equal space
    borderColor: '#000',
    textAlign: 'center',
    color: 'black',
  },
  textCenter: {
    borderColor: '#000',
    textAlign: 'center',
    color: 'black',
  },

  subPersonalDetailSection1: {
    width: '30%',
    borderRight: '1px',
  },
  subPersonalDetailSection2: {
    width: '70%',
  },
  table: {
    border: 1,
  },
  borderY: {
    borderTop: '1px solid black',
    borderBottom: '1px solid black',
  },
  borderR: {
    borderRight: '1px solid black',
  },
  borderL: {
    borderLeft: '1px solid black',
  },
  borderX: {
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
  },
  borderB: {
    borderBottom: '1px solid black',
  },
  borderT: {
    borderTop: '1px solid black',
  },
  tableHeading: {
    border: 1,
  },
  nameSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  td: {
    border: 1,
  },
});

export const CvTemplate = ({ data }: { data: Partial<CvFieldsSchemaType> }) => {
  const createDate = formatDate(data?.date_created as string, 'yyyy-MM-dd');
  const cvCreatedDate = {
    year: formatDate(createDate, 'yyyy'),
    month: formatDate(createDate, 'MM'),
    day: formatDate(createDate, 'dd'),
  };

  const dob = formatDate(data?.date_of_birth as string, 'yyyy-MM-dd');

  const cvDob = {
    year: formatDate(dob, 'yyyy'),
    month: formatDate(dob, 'MM'),
    day: formatDate(dob, 'dd'),
  };

  const age = differenceInYears(new Date(), dob);

  return (
    <>
      <Document>
        <Page
          size={'A4'}
          style={[
            {
              position: 'relative',
            },
            styles.page,
          ]}
        >
          <View wrap>
            <View>
              <View
                style={[
                  {
                    height: '18px',
                    display: 'flex',
                    flexDirection: 'row',
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      fontSize: '12px',
                      width: '208px',
                      height: '18px',
                    },
                  ]}
                >
                  Resume / 再開する
                </Text>
                <View
                  style={[
                    {
                      fontSize: '8px',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    },
                  ]}
                >
                  <Text
                    style={[
                      { paddingHorizontal: '4px', paddingVertical: '2px' },
                    ]}
                  >
                    As of / 現在
                  </Text>
                  <Text
                    style={[
                      { paddingHorizontal: '4px', paddingVertical: '2px' },
                    ]}
                  >
                    Month / 月
                  </Text>
                  <Text
                    style={[
                      {
                        width: '30px',
                        paddingHorizontal: '4px',
                        paddingVertical: '2px',
                      },
                    ]}
                  >
                    {cvCreatedDate.month}
                  </Text>
                  <Text>Day / 日</Text>
                  <Text
                    style={[
                      {
                        width: '30px',
                        paddingHorizontal: '4px',
                        paddingVertical: '2px',
                      },
                    ]}
                  >
                    {cvCreatedDate.day}
                  </Text>
                  <Text
                    style={[
                      { paddingHorizontal: '4px', paddingVertical: '2px' },
                    ]}
                  >
                    Year/日現在
                  </Text>
                  <Text
                    style={[
                      {
                        width: '30px',
                        paddingHorizontal: '4px',
                        paddingVertical: '2px',
                      },
                    ]}
                  >
                    {cvCreatedDate.year}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={[
                { display: 'flex', flexDirection: 'row', position: 'relative' },
              ]}
            >
              <Table>
                <View style={[{ width: '82%' }]}>
                  <TR>
                    <TD
                      style={[
                        styles.cell1,
                        { paddingVertical: '1px', paddingHorizontal: '2px' },
                      ]}
                    >
                      <Text style={[{ fontSize: 8 }]}>
                        Furigana / ふりがな{' '}
                      </Text>
                    </TD>
                    <TD
                      style={[
                        styles.cell3,
                        { paddingVertical: '1px', paddingHorizontal: '2px' },
                      ]}
                    >
                      <Text style={[{ fontSize: 8 }]}>{data?.furigana}</Text>
                    </TD>
                  </TR>
                  <TR>
                    <TD
                      style={[
                        styles.cell1,
                        { paddingVertical: '1px', paddingHorizontal: '2px' },
                      ]}
                    >
                      <Text style={[{ fontSize: 8 }]}>Full Name </Text>
                    </TD>
                    <TD
                      style={[
                        styles.cell3,
                        { paddingVertical: '1px', paddingHorizontal: '2px' },
                      ]}
                    >
                      <Text style={[{ fontSize: 8 }]}>
                        {data?.family_name} {data?.middle_name}{' '}
                        {data?.first_name}
                      </Text>
                    </TD>
                  </TR>
                  <TR>
                    <TD
                      style={[
                        styles.cell1,
                        { paddingVertical: '1px', paddingHorizontal: '2px' },
                      ]}
                    >
                      <Text style={[{ fontSize: 8 }]}>フルネーム </Text>
                    </TD>
                    <TD
                      style={[
                        styles.cell3,
                        { paddingVertical: '1px', paddingHorizontal: '2px' },
                      ]}
                    >
                      <Text style={[{ fontSize: 8 }]}>
                        {data?.family_name_jp} {data?.middle_name_jp}{' '}
                        {data?.first_name_jp}
                      </Text>
                    </TD>
                  </TR>
                  {/* Date of birth */}
                  <TR>
                    <TD
                      style={[
                        styles.cell1,
                        {
                          paddingLeft: '2px',
                          paddingVertical: '1px',
                          paddingHorizontal: '2px',
                          flex: 1, // Makes this cell take equal space
                        },
                      ]}
                    >
                      <Text style={{ fontSize: 8 }}>
                        Date of Birth / 生年月日
                      </Text>
                    </TD>
                    <TD style={[styles.cell3, { paddingHorizontal: '2px' }]}>
                      {/* Empty cell with border */}
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',
                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '6px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Year/日現在
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {cvDob?.year}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '6px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Month / 月{' '}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {cvDob?.month}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '6px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Day / 日
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {cvDob?.day}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '6px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Age / 性別
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderRight: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {age}
                        </Text>
                      </TD>

                      {/* Year cells */}
                    </TD>
                  </TR>

                  {/* Gender */}

                  <TR>
                    <TD
                      style={[
                        styles.cell1,
                        {
                          paddingLeft: '2px',
                          paddingVertical: '1px',
                          paddingHorizontal: '2px',
                          flex: 1, // Makes this cell take equal space
                        },
                      ]}
                    >
                      <Text style={{ fontSize: 8 }}>Gender / 性別 </Text>
                    </TD>
                    <TD style={[styles.cell3, { paddingHorizontal: '2px' }]}>
                      {/* Empty cell with border */}
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {data?.gender}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Height / 身長{' '}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {data?.height}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Weight / 重さ{' '}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: 'none',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {data?.weight}
                        </Text>
                      </TD>

                      {/* Year cells */}
                    </TD>
                  </TR>

                  {/* Nationality */}

                  <TR>
                    <TD
                      style={[
                        styles.cell1,
                        {
                          paddingLeft: '2px',
                          paddingVertical: '1px',
                          paddingHorizontal: '2px',
                          flex: 1, // Makes this cell take equal space
                        },
                      ]}
                    >
                      <Text style={{ fontSize: 8 }}>Nationality / 国籍 </Text>
                    </TD>
                    <TD style={[styles.cell3, { paddingHorizontal: '2px' }]}>
                      {/* Empty cell with border */}
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 8,
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {data?.nationality}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Blood Group / 血液型s
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: 'none',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '6px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {data?.blood_group}
                        </Text>
                      </TD>

                      {/* Year cells */}
                    </TD>
                  </TR>

                  {/* Are you married */}
                  <TR>
                    <TD
                      style={[
                        styles.cell1,
                        {
                          paddingLeft: '2px',
                          paddingVertical: '1px',
                          paddingHorizontal: '2px',
                          flex: 1, // Makes this cell take equal space
                        },
                      ]}
                    >
                      <Text style={{ fontSize: 8 }}>
                        Are you Married? / ますか？
                      </Text>
                    </TD>
                    <TD style={[styles.cell3, { paddingHorizontal: '2px' }]}>
                      {/* Empty cell with border */}
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          {data?.married}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: '1px solid black',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '6px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >
                          Driving License? / 運転免許証？{' '}
                        </Text>
                      </TD>
                      <TD
                        style={{
                          flex: 1,
                          borderRight: 'none',
                          borderBottom: 'none',
                          borderLeft: 'none',
                          borderTop: 'none',

                          minHeight: '13px', // Ensures visible space
                        }}
                      >
                        <Text
                          style={{
                            fontSize: '8px',
                            textAlign: 'center',
                            width: '100%',
                          }}
                        >{`${data?.two_wheeler ? '2 wheeler,' : ''} ${data?.four_wheeler ? '4 wheeler' : ''}`}</Text>
                      </TD>

                      {/* Year cells */}
                    </TD>
                  </TR>
                </View>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      {
                        paddingLeft: '2px',
                        paddingVertical: '1px',
                        paddingHorizontal: '2px',
                        flex: 1, // Makes this cell take equal space
                      },
                    ]}
                  >
                    <Text style={{ fontSize: 8 }}>
                      Phone Number / 電話番号{' '}
                    </Text>
                  </TD>
                  <TD style={[styles.cell3, { paddingHorizontal: '2px' }]}>
                    {/* Empty cell with border */}
                    <TD
                      style={{
                        flex: 1,
                        borderRight: '1px solid black',
                        borderBottom: 'none',
                        borderLeft: 'none',
                        borderTop: 'none',

                        minHeight: '13px', // Ensures visible space
                      }}
                    >
                      <Text
                        style={{
                          fontSize: '8px',
                          textAlign: 'center',
                          width: '100%',
                        }}
                      >
                        {
                          // data?.phone_number ? data?.phone_number.sp : '0-0000-0000'
                        }

                        {data?.phone_number}
                      </Text>
                    </TD>
                    <TD
                      style={{
                        flex: 1,
                        borderRight: '1px solid black',
                        borderBottom: 'none',
                        borderLeft: 'none',
                        borderTop: 'none',

                        minHeight: '13px', // Ensures visible space
                      }}
                    >
                      <Text
                        style={{
                          fontSize: '8px',
                          textAlign: 'center',
                          width: '100%',
                        }}
                      >
                        Email /電子メール{' '}
                      </Text>
                    </TD>
                    <TD
                      style={{
                        flex: 2,
                        borderRight: 'none',
                        borderBottom: 'none',
                        borderLeft: 'none',
                        borderTop: 'none',

                        minHeight: '13px', // Ensures visible space
                      }}
                    >
                      <Text
                        style={{
                          fontSize: '8px',
                          textAlign: 'center',
                          width: '100%',
                        }}
                      >
                        {data?.email_address}
                      </Text>
                    </TD>

                    {/* Year cells */}
                  </TD>
                </TR>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text style={[{ fontSize: 8 }]}>
                      Permanent Address / 本籍地{' '}
                    </Text>
                  </TD>
                  <TD
                    style={[
                      styles.cell3,
                      { paddingVertical: '2px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text style={[{ fontSize: 8 }]}>
                      {data?.permanent_address}
                    </Text>
                  </TD>
                </TR>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text style={[{ fontSize: 8 }]}>
                      Temporary Address / 仮住所{' '}
                    </Text>
                  </TD>
                  <TD
                    style={[
                      styles.cell3,
                      { paddingVertical: '2px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text style={[{ fontSize: 8 }]}>
                      {data?.temporary_address}{' '}
                    </Text>
                  </TD>
                </TR>
              </Table>

              <View
                style={[
                  styles.borderT,
                  styles.borderR,
                  {
                    height: '102px',
                    width: '18%',
                    position: 'absolute',
                    right: '-1px',
                    top: '-1px',
                    overflow: 'hidden',
                    padding: '1px',
                  },
                ]}
              >
                <Image
                  src={idHandler(data?.profile_picture)}
                  style={{ height: '99px', width: '93px' }}
                />
              </View>
            </View>

            <View style={[{ marginTop: '16px' }]}>
              <Table>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text style={[{ fontSize: 8 }]}>Year / 日現在 </Text>
                  </TD>
                  <TD
                    style={[
                      styles.cell1,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text style={[{ fontSize: 8 }]}>Month / 月 </Text>
                  </TD>
                  <TD
                    style={[
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '1px',
                        flex: 3, // Each cell takes equal space
                        borderColor: '#000',
                        textAlign: 'center',
                        color: 'black',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      Educational Background / 学歴{' '}
                    </Text>
                  </TD>
                  <TD
                    style={[
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '1px',
                        flex: 3, // Each cell takes equal space
                        borderColor: '#000',
                        textAlign: 'center',
                        color: 'black',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      School Name / 学校名{' '}
                    </Text>
                  </TD>
                </TR>

                {data?.academics?.map((item, index) => {
                  return (
                    <View key={index}>
                      <TR>
                        <TD
                          style={[
                            styles.cell1,
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '2px',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8 }]}>
                            {item?.completed_date?.split('-')?.[0]}
                          </Text>
                        </TD>
                        <TD
                          style={[
                            styles.cell1,
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '2px',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8 }]}>
                            {' '}
                            {item?.completed_date?.split('-')?.[1]}
                          </Text>
                        </TD>
                        <TD
                          style={[
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '1px',
                              flex: 3, // Each cell takes equal space
                              borderColor: '#000',
                              textAlign: 'center',
                              color: 'black',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8 }]}>{item?.title}</Text>
                        </TD>
                        <TD
                          style={[
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '1px',
                              flex: 3, // Each cell takes equal space
                              borderColor: '#000',
                              textAlign: 'center',
                              color: 'black',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8 }]}>{item?.school}</Text>
                        </TD>
                      </TR>
                      <TR>
                        {' '}
                        <TD
                          style={[
                            styles.cell2,
                            {
                              paddingVertical: '2px',
                              // paddingHorizontal: '1px',
                              paddingLeft: '5px',
                              paddingRight: '4px',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8, width: '100%' }]}>
                            Description / 説明
                          </Text>
                        </TD>
                        <TD
                          style={[
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '2px',
                              flex: 6, // Each cell takes equal space
                              borderColor: '#000',
                              textAlign: 'center',
                              color: 'black',
                            },
                          ]}
                        >
                          <Text
                            style={[
                              {
                                fontSize: 8,
                                textAlign: 'left',
                                width: '100%',
                              },
                            ]}
                          >
                            {item.description}
                          </Text>
                        </TD>
                      </TR>
                    </View>
                  );
                })}
              </Table>
            </View>

            <View style={[{ marginTop: '16px' }]}>
              <Table>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text style={[{ fontSize: 8 }]}>Year / 日現在 </Text>
                  </TD>
                  <TD
                    style={[
                      styles.cell1,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text style={[{ fontSize: 8 }]}>Month / 月 </Text>
                  </TD>
                  <TD
                    style={[
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '1px',
                        flex: 3, // Each cell takes equal space
                        borderColor: '#000',
                        textAlign: 'center',
                        color: 'black',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      Work History / 職歴{' '}
                    </Text>
                  </TD>
                  <TD
                    style={[
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '1px',
                        flex: 3, // Each cell takes equal space
                        borderColor: '#000',
                        textAlign: 'center',
                        color: 'black',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      Company Name / 会社名{' '}
                    </Text>
                  </TD>
                </TR>

                {data?.employment_history?.map((item, index) => {
                  const startDateMonth = item?.start_date?.split('-')?.[0];
                  const startDateYear = item?.start_date?.split('-')?.[1];

                  return (
                    <View key={index}>
                      <TR key={index}>
                        <TD
                          style={[
                            styles.cell1,
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '2px',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8 }]}>
                            {startDateMonth}
                          </Text>
                        </TD>
                        <TD
                          style={[
                            styles.cell1,
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '2px',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8 }]}>
                            {' '}
                            {startDateYear}
                          </Text>
                        </TD>
                        <TD
                          style={[
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '1px',
                              flex: 3, // Each cell takes equal space
                              borderColor: '#000',
                              textAlign: 'center',
                              color: 'black',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8 }]}>{item?.title}</Text>
                        </TD>
                        <TD
                          style={[
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '1px',
                              flex: 3, // Each cell takes equal space
                              borderColor: '#000',
                              textAlign: 'center',
                              color: 'black',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8 }]}>
                            {item?.company_name}
                          </Text>
                        </TD>
                      </TR>{' '}
                      <TR>
                        {' '}
                        <TD
                          style={[
                            styles.cell2,
                            {
                              paddingVertical: '2px',
                              // paddingHorizontal: '4.5px',
                              paddingLeft: '5px',
                              paddingRight: '4px',
                            },
                          ]}
                        >
                          <Text style={[{ fontSize: 8, width: '100%' }]}>
                            Description / 説明
                          </Text>
                        </TD>
                        <TD
                          style={[
                            {
                              paddingVertical: '1px',
                              paddingHorizontal: '2px',
                              flex: 6, // Each cell takes equal space
                              borderColor: '#000',
                              textAlign: 'center',
                              color: 'black',
                            },
                          ]}
                        >
                          <Text
                            style={[
                              {
                                fontSize: 8,
                                textAlign: 'left',
                                width: '100%',
                              },
                            ]}
                          >
                            {item.description}
                          </Text>
                        </TD>
                      </TR>
                    </View>
                  );
                })}
              </Table>
            </View>

            <View style={[{ marginTop: '16px' }]}>
              <Table break>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      Reason for the Application / 志望動機
                    </Text>
                  </TD>
                </TR>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '2px',
                      },
                    ]}
                  >
                    <Text
                      break
                      style={[
                        { fontSize: 8, textAlign: 'left', width: '100%' },
                      ]}
                    >
                      {data?.reason}
                    </Text>
                  </TD>
                </TR>
              </Table>
            </View>
            <View style={[{ marginTop: '16px' }]}>
              <Table break>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      Self-promotion / 自己PR{' '}
                    </Text>
                  </TD>
                </TR>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '2px',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'left', width: '100%' },
                      ]}
                    >
                      {data?.self_promotion}
                    </Text>
                  </TD>
                </TR>
              </Table>
            </View>
            <View style={[{ marginTop: '16px' }]}>
              <Table break>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      Fill in freely on requests regarding salary, office hours,
                      place of work, etc. / 本人希望記入欄{' '}
                    </Text>
                  </TD>
                </TR>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '2px',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'left', width: '100%' },
                      ]}
                    >
                      {data?.extras}
                    </Text>
                  </TD>
                </TR>
              </Table>
            </View>

            <View style={[{ marginTop: '16px' }]}>
              <Table break>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      Vision for the future / 将来のビジョン{' '}
                    </Text>
                  </TD>
                </TR>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '2px',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'left', width: '100%' },
                      ]}
                    >
                      {data?.my_vision}
                    </Text>
                  </TD>
                </TR>
              </Table>
            </View>

            {/* strength */}

            <View style={[{ marginTop: '16px' }]}>
              <Table break>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      Your Strengths / あなたの強み
                    </Text>
                  </TD>
                </TR>
                <TR wrap={true}>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '2px',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'left', width: '100%' },
                      ]}
                    >
                      {data?.strength}
                    </Text>
                  </TD>
                </TR>
              </Table>
            </View>

            {/* weakness */}

            <View style={[{ marginTop: '16px' }]}>
              <Table break>
                <TR>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      { paddingVertical: '1px', paddingHorizontal: '2px' },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'center', width: '100%' },
                      ]}
                    >
                      Your Weakness / あなたの弱点{' '}
                    </Text>
                  </TD>
                </TR>
                <TR wrap={true}>
                  <TD
                    style={[
                      styles.cell1,
                      styles.row,
                      {
                        paddingVertical: '1px',
                        paddingHorizontal: '2px',
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { fontSize: 8, textAlign: 'left', width: '100%' },
                      ]}
                    >
                      {data?.weakness}
                    </Text>
                  </TD>
                </TR>
              </Table>
            </View>
          </View>

          <View
            style={{
              position: 'absolute',
              bottom: '15rem',
              left: '9rem',
              zIndex: '-10',
            }}
            fixed
          >
            <Image
              src={'/img/logoWatermark.jpg'}
              style={{ width: 275, height: 330 }}
              fixed
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: '10px',
              right: '3.5rem',
              zIndex: '-10',
            }}
            fixed
          >
            Text
            <Image
              src={'/img/createdBy.png'}
              style={{ width: 79, height: 22 }}
              fixed
            />
          </View>
        </Page>
        <Documents data={data} />
      </Document>
    </>
  );
};

export default CvTemplate;

