import React from "react";
import styles from "./InfoItem.module.scss";

interface IInfoItemProps {
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

const InfoItem: React.FC<IInfoItemProps> = ({ icon, isLink, text }) => {
  const currentText = text || "Not Avaliable";
  let currentHref = "";

  if (isLink) {
    currentHref = text && text.startsWith("http") ? text : `https://${text}`;
  }

  return (
    <div className={styles.infoItem}>
      {icon}
      <div>
        {isLink && text ? (
          <a href={currentHref} target="_blank">
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  );
};

export default InfoItem;
