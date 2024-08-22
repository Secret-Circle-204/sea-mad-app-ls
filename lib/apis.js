import directus from './directus'

export const getRoomTypes = async (checkInDate, checkOutDate, capacity) => {
  try {
    const availableRooms = await directus.request(
      readItems('room_types', {
        fields: '*', // Fetch all fields
        filter: {
          capacity: { _gte: Number(capacity) } // Filter by capacity
        },
        deep: {
          rooms: {
            _limit: 1, // Limit to 1 room per room type
            _filter: {
              _or: [
                {
                  // Check availability with empty check-in/out dates
                  is_available: true,
                  reservations: {
                    check_in_date: { _null: true }
                  }
                },
                {
                  // Check availability with empty check-in/out dates (redundant)
                  is_available: true,
                  reservations: {
                    check_out_date: { _null: true }
                  }
                },
                {
                  // Check availability with check-out before requested check-in
                  is_available: true,
                  reservations: {
                    check_out_date: { _lt: checkInDate }
                  }
                },
                {
                  // Check availability with check-in after requested check-out
                  is_available: true,
                  reservations: {
                    check_in_date: { _gt: checkOutDate }
                  }
                }
              ]
            }
          }
        }
      })
    )

    return availableRooms
  } catch (error) {
    console.error('Error fetching available room types:', error)
  }
}
