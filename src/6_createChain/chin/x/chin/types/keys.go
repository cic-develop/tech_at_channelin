package types

const (
	// ModuleName defines the module name
	ModuleName = "chin"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_chin"
)

var (
	ParamsKey = []byte("p_chin")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
