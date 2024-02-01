package types

const (
	// ModuleName defines the module name
	ModuleName = "channelin"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_channelin"
)

var (
	ParamsKey = []byte("p_channelin")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
