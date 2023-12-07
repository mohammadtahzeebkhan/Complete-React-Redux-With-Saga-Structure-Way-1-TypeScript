//import Banner_Container from "../ImagesAds/container";
//import HeaderSecondary from "../Header/HeaderSecondary";
//import Procced from "../Procced/component";
//import ActiveOrdersBar from "../ActiveOrdersBar/component";
//import WaitingLoder from "../WaitingLoader/component"
//import VmInventoryHeader from "../Header/VmInventoryHeader";
import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
//import ReplceCard from '../../assets/ReplceCard.png'
import './vminventory.css'
const VMInventory = (props:any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [data,setData]=useState([])
    console.log("props&&props.currentMachineID",props&&props.currentMachineID)

    interface TruncatedVMnameHeadingProps {
        text: string;
        limit: number;
      }
      
      const TruncatedVMnameHeading: React.FC<TruncatedVMnameHeadingProps> = ({ text, limit }) => {
        if (text && text.length <= limit) {
          return <>{text}</>;
        }
        return <>{`${text.substring(0, limit)}...`}</>;
      };
      
      interface TruncatedVMAddressHeadingProps {
        text: string;
        limit: number;
      }
      
      const TruncatedVMAddressHeading: React.FC<TruncatedVMAddressHeadingProps> = ({ text, limit }) => {
        if (text && text.length <= limit) {
          return <>{text}</>;
        }
        return <>{`${text.substring(0, limit)}...`}</>;
      };
      

  

      interface TruncatedVmnameProps {
        text: string;
        limit: number;
      }
      
      const TruncatedVmname: React.FC<TruncatedVmnameProps> = ({ text, limit }) => {
        if (text.length <= limit) {
          return <span style={{ fontSize: "14px", color: "#384F6F" }}>{text}</span>;
        }
        return (
          <span style={{ fontSize: "14px", color: "#384F6F" }}>{`${text && text.substring(
            0,
            limit
          )}`}</span>
        );
      };
      
      
      
      

      interface TruncatedDescriptionProps {
        text: string;
        limit: number;
      }
      
      const TruncatedDescription: React.FC<TruncatedDescriptionProps> = ({ text, limit }) => {
        if (text && text.length <= limit) {
          return <>{text}</>;
        }
        return <>{`${text && text.substring(0, limit)}...`}</>;
      };
      
     

      interface TruncatedTrayProps {
        text: string;
        limit: number;
      }
      
      const TruncatedTray: React.FC<TruncatedTrayProps> = ({ text, limit }) => {
        if (text && text.length <= limit) {
          return <>{text}</>;
        }
        return <>{`${text.substring(0, limit)}`}</>;
      };
      
      
      
      
  
  
   
   



      interface TruncatedHeadingProps {
        text: string;
        limit: number;
      }
      
      const TruncatedHeading: React.FC<TruncatedHeadingProps> = ({ text, limit }) => {
        if (text && text.length <= limit) {
          return (
            <h3
              style={{
                fontSize: "12px",
                marginBottom: "5px",
                color: "#384F6F",
                fontFamily: "Roboto",
              }}
            >
              {text}
            </h3>
          );
        }
        return (
          <h3
            style={{ fontSize: "12px", color: "#384F6F", marginBottom: "5px" }}
          >{`${text.substring(0, limit)}...`}</h3>
        );
      };
      
    
 



      interface TodaySpecialComponentProps {
        data: Array<{
          image_path: string;
          mv_name: string;
          offer_price: number;
          slot_id: string;
          mycount?: number; // Add any other properties you have in your data
        }>;
        searchTerms?: string;
        AddIntoCart: (e: React.MouseEvent, index: number, slotId: string, myCount?: number) => void;
        RemovefromCart: (e: React.MouseEvent, index: number, slotId: string, myCount?: number) => void;
      }
      
      const TodaySpecialComponent: React.FC<TodaySpecialComponentProps> = ({ data, searchTerms, AddIntoCart, RemovefromCart }) => {
        console.log("TodaySpecialComponent data", data);
      
        return (
          <>
            <div>
              {!searchTerms && (
                <>
                  {data && data[0] && (
                    <h3
                      style={{
                        marginTop: "5%",
                        marginLeft: "5%",
                        fontSize: "17px",
                       /*  color: "#94A3B", */
                        fontFamily: "Roboto",
                        letterSpacing: "0.2px",
                        fontWeight: "500",
                        color: "#718198",
                      }}
                    >
                      Today's Special!
                    </h3>
                  )}
                </>
              )}
              <div style={{ width: "100%", overflowX: "scroll" }}>
                {!searchTerms && (
                  <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll", width: "100%" }}>
                    {data.map((el, index) => (
                      <div
                        key={index}
                        style={{
                          width: "141px",
                          padding: "10px",
                          borderRadius: "16px",
                          border: "1px solid rgba(56, 79, 111, 0.08)",
                          background: "#FFF",
                          boxShadow: "0px 4px 10px 0px rgba(56, 79, 111, 0.12)",
                          marginRight: "10px", // Optional margin between divs
                          height: "171px",
                        }}
                      >
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                          <img style={{ width: "73px", height: "73px" }} src={`https://daalchini.s3.ap-south-1.amazonaws.com/dcprod/${el.image_path}`} />
                        </div>
                        <h1 style={{ color: "#333F4E", textAlign: "center", fontFamily: "Roboto", fontSize: "13px", fontStyle: "normal", fontWeight: "500" }}>
                          {el.mv_name}
                        </h1>
                        <h1 style={{ color: "#718198", fontFamily: "Roboto", fontSize: "10px", fontStyle: "normal", fontWeight: "400", lineHeight: "16px", textAlign: "center", width: '100%' }}>
                          Rs. {el.offer_price.toFixed(2)}
                        </h1>
                        {/* Rest of your code */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        );
      };




console.log("props.preMachineID",props.preMachineID,props.currentMachineID,props.preMachineID==props.currentMachineID)
      const matchingData =
      props && props.cartItemsList && props.cartItemsList[0]
        ? props.cartItemsList
        : props.cartItemsList1;
    console.log(
      "matchingData cartItemsList1",
      matchingData,
      props.cartItemsList1
    );
  
    interface Item {
        slot_id: string;
        mycount: number;
        // Add other properties if needed
      }
      
      const mergedData: Item[] | undefined =
        props &&
        props.filteredproducts &&
        props.filteredproducts.map((item:any) => {
          const matchingItem = matchingData.find(
            (matchItem:any) =>
              matchItem.slotId === item.slot_id && props.preMachineID === props.currentMachineID
          );
      
          console.log(
            "matchingItem",
            { ...matchingItem },
            {
              ...item,
              mycount:
                matchingItem && matchingItem.count && matchingItem.count
                  ? matchingItem.count + 1
                  : item.mycount + 1,
            }
          );
      
          return {
            ...item,
            mycount:
              matchingItem && matchingItem.count && matchingItem.count
                ? matchingItem.count
                : item.mycount,
          };
        });
      



        interface Item {
            slot_id: string;
            mycount: number;
            // Add other properties if needed
          }
          
        let slot = localStorage.getItem("Global_Slot_id") ?? "0"; // Provide a default value
          
          const sortedArray1: Item[] | undefined =
            mergedData &&
            mergedData.sort((a:any, b:any) => {
              console.log("sortedArray1-------", a.slot_id === parseInt(slot), b.slot_id === parseInt(slot));
              if (a.slot_id === parseInt(slot)) return -1;
              if (b.slot_id === parseInt(slot)) return 1;
              return 1;
            });
          


      const sortedArray=sortedArray1



    

      interface InventoryComponentProps {
        totalitemcount?: number; // or the appropriate type for totalitemcount
        activeOrderList?: {
            id: number;
            name: string;
            // ... other properties
          }[];
          style?: React.CSSProperties;
        // ... other properties
      }
      
      
      const InventoryComponent: React.FC<any> = (props: any) => {
        console.log("InventoryComponent", props.data);
      
        return (
          <div
            data-testid="grid-container"
            aria-hidden="false"
            // Add your styling here if necessary
          >
            <div
              className="styles_slider__podEu"
              data-testid="grid-slider"
              style={{ marginTop: "10px" }}
            >
              {props.data &&
                props.data.map((el: any, index: any) => {
                  console.log("Mapping element:", el);
                  console.log("Mapping index:", index);
      
                  return (
                    <div style={{ "marginTop": "41px" }}>
                      <div
                        className="styles_row__1ivP1"
                        data-testid="grid-row"
                        style={{
                          marginBottom: 24,
                          marginTop: "-49px",
                          "borderRadius": "16px",
                          "marginRight": "12px",
                          "marginLeft": "12px",
                          "boxShadow":"0px 4px 10px 0px rgba(56, 79, 111, 0.12)",
                          background:"white"
                        }}
                      >
                        <div
                          className="styles_slide__2c207"
                          style={{ marginRight: 0 }}
                        >
                          <div>
                            <div
                              className="styles_cardWithPadding__JE1QE"
                              data-testid="home-restaurant-card-wrapper"
                              style={{
                                width: "calc((100vw - 0px) - 12px)",
                                "marginTop": "21px",
                              }}
                            >
                              <a
                                data-testid="resturant-card-anchor-container"
                                className="styles_container__fLC0R"
                                aria-label="Restaurant name: Bakingo, 
    Cuisines: Bakery, Desserts, Beverages, Snacks,
    Area: Rohini,
    3.0 km away,
    Rating: 4.4,
    Delivers in: 25 mins,
    Cost is: RUPEES 300 for two,
    
    
    Double tap to open restaurant menu."
                                tabIndex={0}
                                role="button"
                              >
                                <div
                                  className="styles_imgContainer__1uHo5"
                                  aria-hidden="true"
                                >
                                  <div
                                    className="styles_ImageContainer__2rk9a"
                                    data-testid="resturant-card-image-container"
                                    style={{
                                      background: "rgb(255, 255, 255)",
                                      height: "87px",
                                    }}
                                  >
                                    <img
                                      className="styles_Image__1fplJ"
                                      loading="lazy"
                                      data-testid="resturant-card-image"
                                      src={`https://daalchini.s3.ap-south-1.amazonaws.com/dcprod/${el.image_path}`}
                                    />
                                  </div>
                        
                                </div>
                                <div
                                  aria-hidden="true"
                                  className="styles_containerRestaurant__3vhx3"
                                  style={{ padding: "12px!important" }}
                                >
                                  <div
                                    className="styles_containerImageBadge__14fk3"
                                    style={{ fontFamily: "Roboto" }}
                                  >
                                    <div
                                      data-testid="resturant-card-name"
                                      className="styles_restaurantName__29jAP"
                                      style={{ fontSize: "14px" }}
                                    >
                                      <TruncatedVmname
                                        text={el.mv_name}
                                        limit={25}
                                      />
                                    </div>
                                    <div
                                      style={{ color: "#94A3B8", fontSize: "12px",marginRight:"8px" }}
                                    >
                                      Tray <TruncatedTray text={el.slot_id.toString()} limit={1}/>
                                    </div>
                                  </div>
    
                                  <div
                                   
                                    style={{ marginTop: "9px" }}
                                  >
                                    <span
                                      data-testid="restaurant-card-cuisines"
                                      style={{
                                        fontSize: "12px",
                                        color: "rgba(148, 163, 184, 1)",
                                        fontFamily: "Roboto",
                                        
    
    
    "fontStyle": "normal",
    "fontWeight": "400",
    "lineHeight": "20px", 
                                      }}
                                    >
                                    <TruncatedDescription  text={el.mv_description} limit={25} />
                                    </span>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      "marginTop": "11px",
                                    }}
                                  >
                                    <h2
                                      style={{ color:"#718198",
                                        "textAlign": "right",
                                        /* SM14 */
                                        "fontFamily":"Roboto",
                                        "fontSize": "14px",
                                        "fontStyle":"normal",
                                        "fontWeight":"600",
                                        "lineHeight": "150%" ,/* 21px */
                                        "letterSpacing":"0.2px"}}
                                    >
                                      Rs.{""} {el.offer_price.toFixed(2)}
                                    </h2>
                                    {el.mycount > 0 ? (
                                      <div
                                        style={{
                                          border: "2px solid rgb(0, 177, 119)",
                                          display: "flex",
                                          width: "100px",
                                          height:"32px",
                                          backgroundColor: "rgb(0, 177, 119)",
                                          color: "white",
                                          justifyContent: "space-around",
                                          alignItems: "center",
                                          padding: "10px",
                                         
                                          borderRadius: "7px",
                                          "marginRight": "18px",
                                        }}
                                      >
                                        <h3
                                          onClick={(e) => {
                                            props.RemovefromCart(
                                              e,
                                              el.index,
                                              el.slot_id,
                                              el.mycount
                                            );
                                          }}
                                        >
                                          -
                                        </h3>
                                        {el.mycount}
                                        <h3
                                          onClick={(e) => {
                                            props.AddIntoCart(
                                              e,
                                              el.index,
                                              el.slot_id,
                                              el.mycount
                                            );
                                          }}
                                        >
                                          +
                                        </h3>
                                      </div>
                                    ) : (
                                      <>
                                        {el.active_count && el.active ? (
                                          <div
                                            style={{
                                              border: "2px solid rgb(0, 177, 119)",
                                              display: "flex",
                                              width: "100px",
                                              
                                              height:"32px",
                                              "backgroundColor":
                                                "rgba(0, 177, 119, 0.04)",
                                              color: "#00B177",
    
                                              justifyContent: "space-around",
                                              alignItems: "center",
                                              padding: "10px",
                                              borderRadius: "7px",
                                              "marginRight": "18px",
                                              fontSize: "14px",
                                              "fontWeight": "500",
                                            }}
                                            //onClick={(e)=>{props.increaseQuantity(e,index,el.slot_id)}}
                                            
                                            onClick={(e) =>
                                              props.AddIntoCart(
                                                e,
                                                el.index,
                                                el.slot_id,
                                                el.mycount
                                              )
                                            }
                                          >
                                            ADD
                                          </div>
                                        ) : (
                                          <div
                                            style={{
                                              display: "flex",
                                              width: "100px",
                                              height:"32px",
                                              "backgroundColor": "#8080803d",
                                              color: "white",
                                              justifyContent: "space-around",
                                              alignItems: "center",
                                              padding: "10px",
                                              borderRadius: "7px",
                                              marginRight: "18px",
                                              "fontWeight": "500",
                                            }}
                                          >
                                            ADD
                                          </div>
                                        )}
                                      </>
                                    )}
                                  </div>
                                </div>
                              </a>
                            </div>
                            <div />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        );
      };
      
      
    




      interface BuyAgainProps {
        buyAgainList?: BuyAgainItem[];
        searchTerms?: string;
        RemovefromCart:(e: React.MouseEvent, index: number, slot_id: string, mycount: number) => void;
        AddIntoCart:(e: React.MouseEvent, index: number, slot_id: string, mycount: number) => void;
      }
      
      interface BuyAgainItem {
        image_path: string;
        mv_name: string;
        offer_price: number;
        slot_id: string;
       
      }
      
      const TruncatedVMnameHeading1: React.FC<{ text: string; limit: number }> = ({ text, limit }) => {
        if (text.length <= limit) {
          return <>{text}</>;
        }
        return <>{`${text.substring(0, limit)}...`}</>;
      };
      
      const TruncatedVMAddressHeading1: React.FC<{ text: string; limit: number }> = ({ text, limit }) => {
        if (text.length <= limit) {
          return <>{text}</>;
        }
        return <>{`${text.substring(0, limit)}...`}</>;
      };
      
      const BuyAgain: React.FC<BuyAgainProps> = (props) => {
        return (
          <>
            <div>
              {!props.searchTerms && (
                <span className="styles_headerContainerSubtitle__1WRg5" aria-hidden="true">
                  {props && props.buyAgainList && props.buyAgainList[0] && (
                    <h3
                      style={{
                        marginTop: "5%",
                        marginLeft: "5%",
                        fontSize: "17px",
                        /* color: "#94A3B", */
                        fontFamily: "Roboto",
                        letterSpacing: "0.2px",
                        fontWeight: "500",
                        color: "#718198",
                      }}
                    >
                      Buy Again!
                    </h3>
                  )}
                </span>
              )}
              <div style={{ width: "100%", overflowX: "scroll" }}>
                {!props.searchTerms && (
                  <div style={{ display: "flex", flexDirection: "row", overflowX: "scroll", width: "100%", padding: "13px" }}>
                    {props &&
                      props.buyAgainList &&
                      props.buyAgainList[0] &&
                      props.buyAgainList.map((el, index) => (
                        <div
                          key={index}
                          style={{
                            width: "141px",
                            padding: "10px",
                            borderRadius: "16px",
                            border: "1px solid rgba(56, 79, 111, 0.08)",
                            background: "#FFF",
                            boxShadow: "0px 4px 10px 0px rgba(56, 79, 111, 0.12)",
                            marginRight: "10px",
                            height: "171px",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <img style={{ width: "73px", height: "73px" }} src={`https://daalchini.s3.ap-south-1.amazonaws.com/dcprod/${el.image_path}`} />
                          </div>
                          <h1 style={{ color: "#333F4E", textAlign: "center", fontFamily: "Roboto", fontSize: "13px", fontStyle: "normal", fontWeight: "500" }}>
                            <TruncatedVMnameHeading1 text={el.mv_name} limit={10} />
                          </h1>
                          <h1 style={{ color: "#718198", fontFamily: "Roboto", fontSize: "10px", fontStyle: "normal", fontWeight: "400", lineHeight: "16px", textAlign: "center", width: "100%" }}>
                            <TruncatedVMAddressHeading1 text={`Rs. ${el.offer_price.toFixed(2)}`} limit={34} />
                          </h1>
                          {props.buyAgainList &&
                            props.buyAgainList.map((data:any, index) => (
                              <div>
                                {el.slot_id === data.slot_id && (
                                  <div>
                                    {data.mycount > 0 ? (
                                      <div
                                        style={{
                                          width: "108px",
                                          "marginTop": "5px",
                                          height: "32px",
                                          top: "496px",
                                          left: "26px",
                                          padding: " 4px 16px 0px 16px",
                                          "borderRadius": "8px",
                                          textAlign: "center",
                                         
                                          gap: "10px",
                                          border: "1px solid rgba(0, 177, 119, 1)",
                                          backgroundColor: "rgb(18, 154, 105)",
                                        }}
                                      >
                                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                                          <h3 style={{ color: "white" }} onClick={(e) => props.RemovefromCart(e, index, data.slot_id, data.mycount)}>
                                            -
                                          </h3>
                                          <span style={{ color: "white" }}>{data.mycount}</span>
                                          <h3 style={{ color: "white" }} onClick={(e) => props.AddIntoCart(e, index, data.slot_id, data.mycount)}>
                                            +
                                          </h3>
                                        </div>
                                      </div>
                                    ) : (
                                      <div
                                        onClick={(e) => props.AddIntoCart(e, data.index, data.slot_id, data.mycount)}
                                        style={{
                                          width: "108px",
                                          "marginTop": "5px",
                                          background: "linear-gradient(0deg, rgba(0, 177, 119, 0.04), rgba(0, 177, 119, 0.04))",
                                          color: "rgb(0, 177, 119)",
                                          height: "32px",
                                          top: "496px",
                                          left: "26px",
                                          padding: " 4px 16px 0px 16px",
                                          "borderRadius": "8px",
                                          textAlign: "center",
                                        
                                          gap: "10px",
                                          border: "1px solid rgba(0, 177, 119, 1)",
                                        }}
                                      >
                                        ADD
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            ))}
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </>
        );
      };
      
      interface ReplaceCardProps {
        replaceCard: boolean;
        setReplceCard: (value: boolean) => void;
        fetcClearPreCard: () => void;
      }
      
      const ReplaceCardModal: React.FC<any> = (props) => {
        return (
          <>
            {props.replaceCard && (
              <div className="modal">
                <div className="modal-content">
                  <img
                    src={"ReplceCard"}
                    style={{ position: "absolute", top: "-41px", left: "39%", width: "73px" }}
                    alt="Replace Card"
                  />
                  <div style={{ textAlign: "center", marginTop: "15%" }}>
                    <h3 style={{ color: "#384F6F", textAlign: "center", fontFamily: "Roboto", fontSize: "16px", fontStyle: "normal", fontWeight: "700", lineHeight: "28px", letterSpacing: "1px" }}>
                      Replace cart items ?
                    </h3>
                    <p style={{ marginTop: "3%", color: "rgba(56, 79, 111, 0.69)", textAlign: "center", fontFamily: "Roboto", fontSize: "12px", fontStyle: "normal", fontWeight: "400", lineHeight: "20px" }}>
                      Your current cart will be cleared when you add items from a different vending machine.
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-around", marginTop: "3%" }}>
                  <button
  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
    props.setReplceCard(false);
  }}
  className="yesbtn"
  style={{
    display: "flex",
    width: "118px",
    height: "41px",
    padding: "10px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexShrink: "0",
  }}
>
  NO
</button>

                    <button
                      onClick={props.fetcClearPreCard}
                      className="nobtn"
                      style={{
                        display: "flex",
                        width: "118px",
                        height: "41px",
                        padding: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        flexShrink: "0",
                      }}
                    >
                      YES
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      };  





interface ActiveOrder{

}

interface  CartItem // Add type for cartItemsList
{
    
}
interface OrderItem{

}
interface PreCartVmInventoryItem{

}
interface VmInventoryItem{

}
interface VmInventorySpecialItem{
    
}

      // Add appropriate types for your props
      interface YourComponentProps {
        replaceCard: boolean;
        setReplceCard: (value: boolean) => void;
        fetcClearPreCard: () => void;
        MachineName?: string; // Add type for MachineName
        MachineAddress?: string; // Add type for MachineAddress
        loader?: boolean; // Add type for loader
        activeOrderList?: ActiveOrder[]; // Add type for activeOrderList
        cartItemsList?: CartItem[]; // Add type for cartItemsList
        totalitemcount?: number; // Add type for totalitemcount
        carttotalAmount?: number; // Add type for carttotalAmount
        ActiveOrders?: OrderItem[]; // Add type for ActiveOrders
        PreCartVmInventoryList?: PreCartVmInventoryItem[]; // Add type for PreCartVmInventoryList
        Final_VmInventoryList?: VmInventoryItem[]; // Add type for Final_VmInventoryList
        final_VmInventorySpecialList?: VmInventorySpecialItem[]; // Add type for final_VmInventorySpecialList
        searchTerms?: string; // Add type for searchTerms
      }
      
      // Add appropriate types for your state
   
      
    
        return (
          <>
         {/*    {props.replaceCard && (
              <div className="modal">
               <ReplaceCardModal/>
              </div>
            )} */}
      
            {/* Other components with their props */}
      {/* 
            <VmInventoryHeader
              title={props.MachineName}
              subtitle={props.MachineAddress}
              route="/"
            /> */}
      
        {/*     {props.loader && <WaitingLoder />} */}
      
        {/*     {props.activeOrderList && props.activeOrderList[0] && (
              <ActiveOrdersBar
                itemname={props.activeOrderList[0].lineItems[0].productName}
                itemlength={props.activeOrderList[0].lineItems.length}
                orderLength={props.activeOrderList.length}
                Top={props.cartItemsList && props.cartItemsList[0] ? "70px" : "21px"}
              />
            )} */}
      
       {/*      {props.cartItemsList && props.cartItemsList[0] && (
              <Procced
                onClick={() => localStorage.setItem("mycart", true)}
                cartCount={props.totalitemcount}
                totalamount={props.carttotalAmount}
                bottom="-5px"
              />
            )} */}
      
             <div
              style={{
                background: "radial-gradient(circle, rgba(245, 233, 233, 0.408) 0%, rgba(185, 245, 247, 0.34) 100%)",
                /* paddingBottom: Boolean(props.ActiveOrders[0]) && Boolean(props.PreCartVmInventoryList[0])
                  ? "7.5rem"
                  : Boolean(props.ActiveOrders[0])
                  ? "4.5rem"
                  : props.PreCartVmInventoryList[0] && "3.5rem", */
              }}
              className="pb-1 overflow-y-auto h-screen"
            > 
            <h1 className="mt-6">tahzeeb</h1>
           
              <InventoryComponent data={props&&props.inventoryList}/>
            </div> 
          </>
        );
      
      
     
      

    

};

export default VMInventory
