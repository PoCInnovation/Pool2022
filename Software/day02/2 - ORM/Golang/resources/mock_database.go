package tests

import (
	"SoftwareGoDay2/ent"
	"context"
	"errors"
	"sync"

	"github.com/google/uuid"
)

type MockDatabase struct {
	DB    map[string]*ent.Artist
	mutex sync.Mutex
}

func NewMockDatabase() *MockDatabase {
	return &MockDatabase{DB: make(map[string]*ent.Artist)}
}

var (
	artistAlreadyExist = errors.New("artist with same ID already exist")
	artistUnknown      = errors.New("could not find artist")
)

func (m *MockDatabase) CreateArtist(_ context.Context, name, nationality string) (*ent.Artist, error) {
	m.mutex.Lock()
	defer m.mutex.Unlock()

	id := uuid.New()

	if _, ok := m.DB[id.String()]; ok {
		return nil, artistAlreadyExist
	}

	artist := &ent.Artist{ID: id, Name: name, Nationality: nationality}

	m.DB[id.String()] = artist

	return artist, nil
}

func (m *MockDatabase) GetArtists(_ context.Context) ([]*ent.Artist, error) {
	m.mutex.Lock()
	defer m.mutex.Unlock()

	artists := make([]*ent.Artist, 0, len(m.DB))

	for _, a := range m.DB {
		artists = append(artists, a)
	}

	return artists, nil
}

func (m *MockDatabase) GetArtistByID(_ context.Context, id uuid.UUID) (*ent.Artist, error) {
	m.mutex.Lock()
	defer m.mutex.Unlock()

	artist, ok := m.DB[id.String()]
	if !ok {
		return nil, artistUnknown
	}

	return artist, nil
}

func (m *MockDatabase) UpdateArtist(_ context.Context, artist *ent.Artist) (*ent.Artist, error) {
	m.mutex.Lock()
	defer m.mutex.Unlock()

	_, ok := m.DB[artist.ID.String()]
	if !ok {
		return nil, artistUnknown
	}

	m.DB[artist.ID.String()] = artist

	return artist, nil
}

func (m *MockDatabase) DeleteArtist(_ context.Context, id uuid.UUID) (*ent.Artist, error) {
	m.mutex.Lock()
	defer m.mutex.Unlock()

	artist, ok := m.DB[id.String()]
	if !ok {
		return nil, artistUnknown
	}

	delete(m.DB, id.String())

	return artist, nil
}
