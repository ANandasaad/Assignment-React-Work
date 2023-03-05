 export function filterData(searchText, allrestaurnts) {
    return allrestaurnts.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
  }

