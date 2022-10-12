import moment from "moment";
import React from "react";
import icon from "../../assets/user.png";

/**
 * It takes in an item object and returns a table row with the item's email, nft, description,
 * accessories, status, and date_claimed
 * @returns A table row with the following columns:
 * - Email
 * - NFT
 * - Description
 * - Accessories
 * - Status
 * - Date Claimed
 */
export const ListItem = ({ item }) => {
  return (
    <tr key="main">
      <td>
        <span className="tooltip">
          {item.email}
          <span class="tooltiptext">{item.email}</span>
        </span>
      </td>
      <td>
        <div className="nft">
          <span className="nft-icon">
            <img src={icon} width="36" height="36" alt={item.nft} />
          </span>
          <span>{item.nft}</span>
        </div>
      </td>
      <td className="description">{item.description}</td>
      <td>
        {item.accessories.slice(0, 2).map((accessory) => (
          <span className="accessories">{accessory}</span>
        ))}
        {item.accessories.length > 2 && (
          <span className="accessories tooltip">
            {`+${item.accessories.length - 2}`}
            <span class="tooltiptext">
              {" "}
              {item.accessories
                .slice(2, item.accessories.length)
                .map((accessory) => (
                  <span className="accessories">{accessory} </span>
                ))}
            </span>
          </span>
        )}
      </td>
      <td>
        <span className={`status ${item.status}`}>{item.status}</span>
      </td>
      <td>{moment(item.date_claimed).format("LL")}</td>
    </tr>
  );
};
