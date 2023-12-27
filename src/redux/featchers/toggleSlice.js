// import { createSlice } from "@reduxjs/toolkit";

// const initialstate = {
//     showiteminfo: false ,
//     showadditem: false,
//     showorderiteminfo:false,
//     showEditItem:false,
//     showTableItem:false,
//     item: null,
//     TableItem: null,
// }

// const toggleSlice = createSlice({
//     name: "toggle",
//     initialState: initialstate,
//     reducers: {
//         onClickShow: (state, action) => {
//             state.showiteminfo = true;
//             state.item = action.payload.item;
//         },
//         onClickHide: (state) => {
//             state.showiteminfo = false;
//             state.item = null
//         },
//         onClickAddItem: (state, action) => {
//             state.showadditem = true;
//         },
//         onClickHideAddItem: (state) => {
//             state.showadditem = false;
//         },
//         onClickShowOrder: (state, action) => {
//             state.showorderiteminfo = true;
//             state.item = action.payload.item;
//         },
//         onClickHideOrder: (state) => {
//             state.showorderiteminfo = false;
//             state.item = null

//         },
//         onClickShowEditItem: (state, action) => {
//             state.showiteminfo = false;
//             state.showEditItem = true;
//         },
//         onClickHideEditItem: (state) => {
//             state.showEditItem = false;
//             state.item = null

//         },
//         onClickReturnInfo: (state, action) => {
//             state.showiteminfo = true;
//             state.showEditItem = false;
//         },
//         onClickShowTableInfo: (state, action) => {
//             state.showTableItem = true;
//             state.TableItem = action.payload.TableItem;
//         },
//         onClickHideTableInfo: (state) => {
//             state.showTableItem = false;
//             state.TableItem = null

//         },
        

//     }
// })

// export const { onClickShow, onClickHide, onClickAddItem,
//      onClickHideAddItem ,onClickShowOrder,onClickHideOrder ,
//      onClickHideEditItem , onClickShowEditItem,onClickReturnInfo,
//      onClickShowTableInfo,onClickHideTableInfo
//     } = toggleSlice.actions
// export default toggleSlice.reducer