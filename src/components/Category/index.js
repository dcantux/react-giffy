import React from "react";

import { CategoryTitle, CategoryList, CateogryListItem, CategoryLink } from "./style";

export default function Category({ name, options = [] }) {
  return (
    <section>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CateogryListItem key={singleOption} index={index}>
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CateogryListItem>
        ))}
      </CategoryList>
    </section>
  );
}